/* ************************************************************************

 Copyright:

 License:

 Authors:

 ************************************************************************ */

qx.Theme.define("mathmaze.theme.Font", {
    extend : qx.theme.modern.Font,

    fonts : {
        "default" :
        {
            size : (qx.core.Environment.get("os.name") == "win" &&
            (qx.core.Environment.get("os.version") == "7" ||
            qx.core.Environment.get("os.version") == "vista")) ? 12 : 11,
            lineHeight : 1.4,
            family : qx.core.Environment.get("os.name") == "osx" ?
                [ "Lucida Grande" ] :
                ((qx.core.Environment.get("os.name") == "win" &&
                (qx.core.Environment.get("os.version") == "7" ||
                qx.core.Environment.get("os.version") == "vista"))) ?
                    [ "Segoe UI", "Candara" ] :
                    [ "Tahoma", "Liberation Sans", "Arial", "sans-serif" ]
        },

        "bold" :
        {
            size : (qx.core.Environment.get("os.name") == "win" &&
            (qx.core.Environment.get("os.version") == "7" ||
            qx.core.Environment.get("os.version") == "vista")) ? 12 : 11,
            lineHeight : 1.4,
            family : qx.core.Environment.get("os.name") == "osx" ?
                [ "Lucida Grande" ] :
                ((qx.core.Environment.get("os.name") == "win" &&
                (qx.core.Environment.get("os.version") == "7" ||
                qx.core.Environment.get("os.version") == "vista"))) ?
                    [ "Segoe UI", "Candara" ] :
                    [ "Tahoma", "Liberation Sans", "Arial", "sans-serif" ],
            bold : true
        },

        "small" :
        {
            size : (qx.core.Environment.get("os.name") == "win" &&
            (qx.core.Environment.get("os.version") == "7" ||
            qx.core.Environment.get("os.version") == "vista")) ? 11 : 10,
            lineHeight : 1.4,
            family : qx.core.Environment.get("os.name") == "osx" ?
                [ "Lucida Grande" ] :
                ((qx.core.Environment.get("os.name") == "win" &&
                (qx.core.Environment.get("os.version") == "7" ||
                qx.core.Environment.get("os.version") == "vista"))) ?
                    [ "Segoe UI", "Candara" ] :
                    [ "Tahoma", "Liberation Sans", "Arial", "sans-serif" ]
        },

        "monospace" :
        {
            size: 11,
            lineHeight : 1.4,
            family : qx.core.Environment.get("os.name") == "osx" ?
                [ "Lucida Console", "Monaco" ] :
                ((qx.core.Environment.get("os.name") == "win" &&
                (qx.core.Environment.get("os.version") == "7" ||
                qx.core.Environment.get("os.version") == "vista"))) ?
                    [ "Consolas" ] :
                    [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]

        },
        pt14:{
            size:14,
            lineHeight : 1.4,
            family : qx.core.Environment.get("os.name") == "osx" ?
                [ "Lucida Console", "Monaco" ] :
                ((qx.core.Environment.get("os.name") == "win" &&
                (qx.core.Environment.get("os.version") == "7" ||
                qx.core.Environment.get("os.version") == "vista"))) ?
                    [ "Consolas" ] :
                    [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]
        },
        pt16:{
            size:16,
            lineHeight : 1.4,
            family : qx.core.Environment.get("os.name") == "osx" ?
                [ "Lucida Console", "Monaco" ] :
                ((qx.core.Environment.get("os.name") == "win" &&
                (qx.core.Environment.get("os.version") == "7" ||
                qx.core.Environment.get("os.version") == "vista"))) ?
                    [ "Consolas" ] :
                    [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]
        },
        pt18:{
            size:18,
            lineHeight : 1.4,
            family : qx.core.Environment.get("os.name") == "osx" ?
                [ "Lucida Console", "Monaco" ] :
                ((qx.core.Environment.get("os.name") == "win" &&
                (qx.core.Environment.get("os.version") == "7" ||
                qx.core.Environment.get("os.version") == "vista"))) ?
                    [ "Consolas" ] :
                    [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]
        },
        pt20:{
            size:20,
            lineHeight : 1.4,
            family : qx.core.Environment.get("os.name") == "osx" ?
                [ "Lucida Console", "Monaco" ] :
                ((qx.core.Environment.get("os.name") == "win" &&
                (qx.core.Environment.get("os.version") == "7" ||
                qx.core.Environment.get("os.version") == "vista"))) ?
                    [ "Consolas" ] :
                    [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]
        },
        pt22:{
            size:22,
            lineHeight : 1.4,
            family : qx.core.Environment.get("os.name") == "osx" ?
                [ "Lucida Console", "Monaco" ] :
                ((qx.core.Environment.get("os.name") == "win" &&
                (qx.core.Environment.get("os.version") == "7" ||
                qx.core.Environment.get("os.version") == "vista"))) ?
                    [ "Consolas" ] :
                    [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]
        },
        pt40:{
            size:40,
            lineHeight : 1.4,
            family : qx.core.Environment.get("os.name") == "osx" ?
                [ "Lucida Console", "Monaco" ] :
                ((qx.core.Environment.get("os.name") == "win" &&
                (qx.core.Environment.get("os.version") == "7" ||
                qx.core.Environment.get("os.version") == "vista"))) ?
                    [ "Consolas" ] :
                    [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]
        }
    }
});