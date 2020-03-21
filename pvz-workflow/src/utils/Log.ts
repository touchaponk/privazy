const stackTrace = require('stack-trace');
const winston = require('winston');
const util = require('util');
const path = require('path');

const transports = [];
const tag = "[" + process.env.SERVICE_NAME + "]";

//expose log to transport by process.env.LOG_DESTINATION
if(process.env.LOG_DESTINATION ) {
    if(process.env.LOG_DESTINATION == "rapid7"){
        require('r7insight_node');
        const InsightOpsTransport = new winston.transports.Logentries({
            token: (process.env.RAPID7_LOG_TOKEN) ? process.env.RAPID7_LOG_TOKEN : '69cbaa4d-8ce4-48e7-afe2-eee75158d2e6',
            region: 'ap'
        });
        
        console.log("using rapid7 insightops");
        transports.push(InsightOpsTransport);
    }
    else if(process.env.LOG_DESTINATION == "file") {
        require('winston-daily-rotate-file');
        const fileRotationTransport = new (winston.transports.DailyRotateFile)({
            handleExceptions: false,
            humanReadableUnhandledException: false,
            level: process.env.log,
            datePattern: 'YYYY-MM-DD',
            timestamp: () => {
                return new Date().toLocaleString();
            },
            formatter: (options : any) => {
                return options.timestamp() + ' ' + options.level.toUpperCase() + ' ' + (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' );
            },
            filename: path.join(process.env.LOG_FOLDER, 'api-%DATE%.log'),
            maxSize: (process.env.LOG_MAX_SIZE) ? process.env.LOG_MAX_SIZE : '50m',
        });
    
        console.log("logging to files");
        transports.push(fileRotationTransport)
    }
}


//expose console log by default
// const consoleTransport = new ()({
//     handleExceptions: false,
//     humanReadableUnhandledException: true,
//     level: process.env.log,
//     timestamp:  ()=> {
//         const now = new Date();
//         return now.toLocaleString()+"-"+now.getMilliseconds();
//     },
// });
// console.log("using console log");
transports.push(new winston.transports.Console());
//

const { splat, combine, timestamp, printf } = winston.format;
// @ts-ignore
const myFormat = printf(({ timestamp, level, message, meta }) => {
    return `${timestamp}: ${level}: ${message};${meta? JSON.stringify(meta) : ''}`;
});
const logger = new winston.createLogger({
    format: combine(
        timestamp(),
        splat(),
        myFormat
    ),
    level: process.env.log,
    transports: transports
});
export class Log{
    public static handleRejection(){
        process.on('unhandledRejection', (error: any, p) => {
            Log.error('Unhandled Rejection with reason:'+ (process.env.HIDE_LOG_STACK ? error : (error.stack || error)));
            // Log.error('Unhandled Rejection with reason:'+ (process.env.HIDE_LOG_STACK ? error : (error.stack || error)));
            // application specific logging, throwing an error, or other logic here
        });
        process.on('uncaughtException', (error) => {
            Log.error('Unhandled Exception with reason:'+ (process.env.HIDE_LOG_STACK ? error : (error.stack || error)));
            // application specific logging, throwing an error, or other logic here
        });
    }
    public static debug(...args : any[]) {
        var msg = ""
        for (var i = 0; i < arguments.length; i++) {
            if (typeof(arguments[i]) == "object") msg += util.inspect(arguments[i],{
                depth:null
            });
            else msg += arguments[i];
        }
        var c = 0;
        var stacks = stackTrace.get();
        var ststr = "";
        if(!process.env.HIDE_LOG_STACK)for(let i in stacks){
            // if(count > 2)break;
            var st = stacks[i];
            var fname = st.getFileName();
            if(!fname) continue;
            fname = fname.replace(/\\/g, "/");
            // console.log("fname is "+fname+"\n");
            if(fname.indexOf("node_modules") < 0
                && (fname.indexOf("native code")<0) && (fname.indexOf("Log.js")<0)) {
                var t = fname.substring(fname.lastIndexOf("/")) + ":" + st.getLineNumber();
                ststr = t +">"+ ststr;
                // console.log("Adding "+t);
                if(++c >= 3)break;
            }
        }
        ststr = "[" + ststr + "] ";
        var msg = tag + ststr + msg.replace(/\n/g, "\n" + ststr + "\t");
        logger.debug(msg);
    }
    public static error(...args : any[]){
        var msg = ""
        for (var i = 0; i < arguments.length; i++) {
            if (typeof(arguments[i]) == "object") msg += JSON.stringify(arguments[i], null, 4);
            else msg += arguments[i];
        }
        var c = 0;
        var stacks = stackTrace.get();
        var ststr = "";
        if(!process.env.HIDE_LOG_STACK)for(let i in stacks){
            // if(count > 2)break;
            var st = stacks[i];
            var fname = st.getFileName();
            if(!fname) continue;
            fname = fname.replace(/\\/g, "/");
            // console.log("fname is "+fname+"\n");
            if(fname.indexOf("node_modules") < 0
                && (fname.indexOf("native code")<0) && (fname.indexOf("Log.js")<0)) {
                var t = fname.substring(fname.lastIndexOf("/")) + ":" + st.getLineNumber();
                ststr = t +">"+ ststr;
                // console.log("Adding "+t);
                if(++c >= 3)break;
            }
        }
        ststr = "[" + ststr + "] ";
        var msg = tag + ststr + msg.replace(/\n/g, "\n" + ststr + "\t");
        logger.error(msg);
    }
    public static info(...args : any[]){
        var msg = ""
        for (var i = 0; i < arguments.length; i++) {
            if (typeof(arguments[i]) == "object") msg += JSON.stringify(arguments[i], null, 4);
            else msg += arguments[i];
        }
        var c = 0;
        var stacks = stackTrace.get();
        var ststr = "";
        if(!process.env.HIDE_LOG_STACK)for(let i in stacks){
            // if(count > 2)break;
            var st = stacks[i];

            var fname = st.getFileName();
            if(!fname) continue;
            fname = fname.replace(/\\/g, "/");
            // console.log("fname is "+fname+"\n");
            if(fname.indexOf("node_modules") < 0
                && (fname.indexOf("native code")<0) && (fname.indexOf("Log.js")<0)) {
                var t = fname.substring(fname.lastIndexOf("/")) + ":" + st.getLineNumber();
                ststr = t +">"+ ststr;
                // console.log("Adding "+t);
                if(++c >= 3)break;
            }
        }
        ststr = "[" + ststr + "] ";
        var msg = tag + ststr + msg.replace(/\n/g, "\n" + ststr + "\t");
        logger.info(msg);
    }
};
Log.handleRejection();