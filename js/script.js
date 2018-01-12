// jshint esversion: 6

// Initialize variables

var timer = 0;
var mobile_layout = false;
var scroll_to_top_next = false;

var discorddate = '2017-11-03';
var ytdate = '2017-09-25';

var ytdisableddates = [
    '2017-09-01',
    '2017-09-02',
    '2017-09-03',
    '2017-09-04',
    '2017-09-05',
    '2017-09-06',
    '2017-09-07',
    '2017-09-08',
    '2017-09-09',
    '2017-09-10',
    '2017-09-11',
    '2017-09-12',
    '2017-09-13',
    '2017-09-14',
    '2017-09-15',
    '2017-09-16',
    '2017-09-17',
    '2017-09-18',
    '2017-09-19',
    '2017-09-20',
    '2017-09-21',
    '2017-09-22',
    '2017-09-23',
    '2017-09-24',
    '2017-09-26',
    '2017-09-28',
    '2017-09-29',
    '2017-09-30',
    '2017-10-01',
    '2017-10-03',
    '2017-10-05',
    '2017-10-07',
    '2017-10-08',
    '2017-10-09',
    '2017-10-10',
    '2017-10-12',
    '2017-10-15',
    '2017-10-17',
    '2017-10-19',
    '2017-10-20',
    '2017-10-21',
    '2017-10-22',
    '2017-10-23',
    '2017-10-25',
    '2017-10-26',
    '2017-10-27',
    '2017-10-28',
    '2017-10-29',
    '2017-10-30',
    '2017-10-31',
    '2017-11-01',
    '2017-11-02',
];

var showdown_message_filter_regexp_discord = /(\\|\{|\}|\[|\]|\(|\)|\#|\+|\-|\.|\!)/g;
var showdown_message_filter_regexp_youtube = /(\`|\\|\{|\}|\[|\]|\(|\)|\#|\+|\-|\.|\!)/g;
var showdown_message_filter_escape = '\\$1';

var showdown_message_options_discord = {
    omitExtraWLInCodeBlocks: true,
    noHeaderId: true,
    literalMidWordUnderscores: true,
    strikethrough: true,
    emoji: true,
    underline: true,
    simpleLineBreaks: true
};

var converter_discord = new showdown.Converter(showdown_message_options_discord);

var convert_discord_message = function(text) {
    return converter_discord.makeHtml(text.replace(showdown_message_filter_regexp_discord, showdown_message_filter_escape));
};

var showdown_message_options_youtube = {
    omitExtraWLInCodeBlocks: true,
    noHeaderId: true,
    literalMidWordUnderscores: true,
    strikethrough: false,
    emoji: true,
    underline: false,
    ghCodeBlocks: false
};

var converter_youtube = new showdown.Converter(showdown_message_options_youtube);

var convert_youtube_message = function(text) {
    return converter_youtube.makeHtml(text.replace(showdown_message_filter_regexp_youtube, showdown_message_filter_escape));
};

var mech_data = {
    "labels": ["2017-11-03", "2017-11-04", "2017-11-05", "2017-11-06", "2017-11-07", "2017-11-08", "2017-11-09", "2017-11-10", "2017-11-11", "2017-11-12", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-16", "2017-11-17", "2017-11-18", "2017-11-19", "2017-11-20", "2017-11-21", "2017-11-22", "2017-11-23", "2017-11-24", "2017-11-25", "2017-11-26", "2017-11-27", "2017-11-29", "2017-11-30", "2017-12-02", "2017-12-03", "2017-12-04", "2017-12-05", "2017-12-06", "2017-12-07", "2017-12-08", "2017-12-09", "2017-12-10", "2017-12-12", "2017-12-13", "2017-12-14", "2017-12-15", "2017-12-16", "2017-12-17", "2017-12-18", "2017-12-19", "2017-12-21", "2017-12-23", "2017-12-24", "2017-12-25", "2017-12-26", "2017-12-27", "2017-12-28", "2017-12-29", "2017-12-30", "2017-12-31"],
    "series": [150, 277, 207, 505, 60, 42, 66, 78, 809, 122, 176, 247, 126, 37, 332, 60, 110, 26, 50, 11, 77, 422, 50, 16, 69, 93, 297, 17, 213, 41, 112, 156, 113, 245, 35, 14, 17, 3, 2, 58, 15, 13, 51, 2, 3, 73, 17, 19, 33, 69, 81, 165, 18, 120]
};

var lisa_data = {
    "labels": ["2017-11-03", "2017-11-04", "2017-11-05", "2017-11-06", "2017-11-07", "2017-11-08", "2017-11-09", "2017-11-10", "2017-11-11", "2017-11-12", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-17", "2017-11-18", "2017-11-19", "2017-11-20", "2017-11-21", "2017-11-22", "2017-11-23", "2017-11-24", "2017-11-25", "2017-11-26", "2017-11-27", "2017-11-28", "2017-11-29", "2017-11-30", "2017-12-01", "2017-12-02", "2017-12-03", "2017-12-04", "2017-12-05", "2017-12-06", "2017-12-07", "2017-12-08", "2017-12-09", "2017-12-12", "2017-12-16", "2017-12-17", "2017-12-18", "2017-12-21", "2017-12-22", "2017-12-23", "2017-12-24", "2017-12-25", "2017-12-26", "2017-12-27", "2017-12-28", "2017-12-29", "2017-12-30"],
    "series": [329, 146, 159, 338, 85, 3, 42, 53, 534, 104, 152, 196, 97, 274, 13, 56, 36, 22, 2, 2, 462, 37, 11, 57, 2, 89, 232, 14, 1, 68, 24, 85, 45, 35, 92, 41, 1, 12, 1, 1, 8, 3, 34, 5, 1, 20, 4, 3, 14, 2]
};

var ant_data = {
    "labels": ["2017-11-03", "2017-11-04", "2017-11-05", "2017-11-06", "2017-11-08", "2017-11-12", "2017-11-14", "2017-11-17", "2017-11-19", "2017-11-24", "2017-11-29", "2017-11-30", "2017-12-01", "2017-12-03", "2017-12-04", "2017-12-06", "2017-12-07", "2017-12-08", "2017-12-18", "2017-12-20", "2017-12-21", "2017-12-22", "2017-12-23", "2017-12-24", "2017-12-25", "2017-12-26", "2017-12-27", "2017-12-28", "2017-12-29"],
    "series": [388, 263, 161, 23, 4, 19, 75, 5, 12, 117, 34, 158, 4, 72, 11, 119, 64, 117, 26, 66, 7, 5, 32, 1, 1, 2, 91, 90, 140]
};

var all_data = {
    "labels": ["2017-11-03", "2017-11-04", "2017-11-05", "2017-11-06", "2017-11-07", "2017-11-08", "2017-11-09", "2017-11-10", "2017-11-11", "2017-11-12", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-16", "2017-11-17", "2017-11-18", "2017-11-19", "2017-11-20", "2017-11-21", "2017-11-22", "2017-11-23", "2017-11-24", "2017-11-25", "2017-11-26", "2017-11-27", "2017-11-28", "2017-11-29", "2017-11-30", "2017-12-01", "2017-12-02", "2017-12-03", "2017-12-04", "2017-12-05", "2017-12-06", "2017-12-07", "2017-12-08", "2017-12-09", "2017-12-10", "2017-12-12", "2017-12-13", "2017-12-14", "2017-12-15", "2017-12-16", "2017-12-17", "2017-12-18", "2017-12-19", "2017-12-20", "2017-12-21", "2017-12-22", "2017-12-23", "2017-12-24", "2017-12-25", "2017-12-26", "2017-12-27", "2017-12-28", "2017-12-29", "2017-12-30", "2017-12-31"],
    "series": [{
        meta: "First day",
        value: 1267
    }, 886, 577, 983, 198, 82, 118, 164, 1873, 273, 412, 623, 227, 77, 736, 99, 181, 69, 86, 13, 146, 1016, 89, 27, 126, 2, 265, 730, 46, 24, 419, 92, 197, 320, 249, 467, 76, 21, 22, 3, 2, 92, 27, 30, 88, 3, 131, 42, 8, 140, 27, 32, 79, 168, 174, 319, 30, 207]
};

// Make sure to remember the day
$(window).on('load', function() {
    var cookies = document.cookie;

    m = cookies.match(/discorddate=([^;]*)/);
    if (m !== null && m[1] !== '') {
        discorddate = m[1];
    }

    m = cookies.match(/ytdate=([^;]*)/);
    if (m !== null && m[1] !== '') {
        ytdate = m[1];
    }
});

// Adjust message data to fill holes

function pad_data(object) {
    var m = moment.utc("2017-11-02");
    var e = moment.utc("2017-12-31");
    var i = 0;

    var labels = [];
    while (m.diff(e, 'days') < 0) {
        labels.push(m.format("YYYY-MM-DD"));
        m.add(1, 'days');
    }
    for (i = 0; i < labels.length; i++) {
        if (object.labels[i] !== labels[i]) {
            object.labels.splice(i, 0, labels[i]);
            object.series.splice(i, 0, 0);
        }
    }

    return object;
}

mech_data = pad_data(mech_data);
lisa_data = pad_data(lisa_data);
ant_data = pad_data(ant_data);
all_data = pad_data(all_data);

// Construct message graph

var data = {
    labels: all_data.labels,
    series: [{
        name: 'Total messages',
        data: all_data.series
    }, {
        name: 'MechaLynx',
        data: mech_data.series
    }, {
        name: 'Lisa R',
        data: lisa_data.series
    }, {
        name: 'Antoine',
        data: ant_data.series
    }]
};

var options = {
    axisY: {
        showLabel: false
    },
    series: {
        'Total messages': {
            showArea: true,
            showPoint: false
        },
        'MechaLynx': {
            showPoint: false
        },
        'Lisa R': {
            showPoint: false
        },
        'Antoine': {
            showPoint: false
        }
    },
    plugins: [
        Chartist.plugins.ctAxisTitle({
            axisX: {
                // axisTitle: 'Date',
                axisClass: 'ct-axis-title',
                offset: {
                    x: 0,
                    y: 50
                },
                textAnchor: 'middle'
            },
            axisY: {
                axisTitle: 'Messages',
                axisClass: 'ct-axis-title',
                offset: {
                    x: 0,
                    y: 36
                },
                flipTitle: true
            }
        })
    ]
};

var responsive_options = [
    ['screen and (max-width: 1280px)', {
        axisX: {
            labelInterpolationFnc: function(value, index) {
                return index % 7 === 0 ? 'W' + (index / 7) : null;
            }
        }
    }],
    ['screen and (min-width: 1281px)', {
        axisX: {
            labelInterpolationFnc: function(value, index) {
                return value.slice(-5);
            }
        }
    }]
];


var chart = new Chartist.Line('#msg-over-time-graph', data, options, responsive_options);

// Rotate labels when showing exact dates
chart.on('draw', (ctx) => {
    m = window.matchMedia("(min-width: 1281px)").matches;
    if (m) {
        if (ctx.type === 'label' && ctx.text.toString().match(/\d\d-\d\d/)) {
            // adjust label position for rotation
            const dX = ctx.width + (104 - ctx.width);
            ctx.element.attr({
                x: ctx.element.attr('x') - dX
            });
        }
    }
});

emotion_opts = {
    axisY: {
        showLabel: false,
        showGrid: false
    },
    axisX: {
        showLabel: false,
        showGrid: true
    },
    stackBars: true,
    horizontalBars: true,
    height: 128
};

var emfunc = function(data) {
    if (data.type === 'bar') {
        data.element.attr({
            style: 'stroke-width: 16px'
        });
    }
};

factor = 2;
chart2 = new Chartist.Bar('#overstate-lisa', {
    labels: ['lisa-1'],
    series: [
        [40 * factor],
        [7 * factor],
        [12 * factor],
        [3 * factor]
    ]
}, emotion_opts).on('draw', emfunc);

chart3 = new Chartist.Bar('#understate-lisa', {
    labels: ['lisa-2'],
    series: [
        [8 * factor],
        [21 * factor],
        [8 * factor],
        [7 * factor],
        [12 * factor],
        [3 * factor]
    ]
}, emotion_opts).on('draw', emfunc);

chart3 = new Chartist.Bar('#overstate-mechalynx', {
    labels: ['mechalynx-1'],
    series: [
        [47 * factor],
        [10 * factor],
        [3 * factor],
        [2 * factor]
    ]
}, emotion_opts).on('draw', emfunc);

chart3 = new Chartist.Bar('#understate-mechalynx', {
    labels: ['mechalynx-2'],
    series: [
        [8 * factor],
        [21 * factor],
        [8 * factor],
        [7 * factor],
        [12 * factor],
        [3 * factor]
    ]
}, emotion_opts).on('draw', emfunc);

chart3 = new Chartist.Bar('#overstate-antoine', {
    labels: ['antoine-1'],
    series: [
        [3 * factor],
        [8 * factor],
        [21 * factor],
        [8 * factor],
        [8 * factor],
        [11 * factor],
        [3 * factor]
    ]
}, emotion_opts).on('draw', emfunc);

chart3 = new Chartist.Bar('#understate-antoine', {
    labels: ['antoine-2'],
    series: [
        [3 * factor],
        [8 * factor],
        [21 * factor],
        [8 * factor],
        [8 * factor],
        [11 * factor],
        [3 * factor]
    ]
}, emotion_opts).on('draw', emfunc);

// timestamp, channel, user, text, comment, highlight
var construct_message_mobile_discord = function(msg, returnUserRow, channel_change, emphasis) {
    returnUserRow = typeof returnUserRow !== 'undefined' ? returnUserRow : false;
    channel_change = typeof channel_change !== 'undefined' ? channel_change : false;
    emphasis = typeof emphasis !== 'undefined' ? emphasis : false;

    var returnlist = [];

    if (returnUserRow) {
        var user_row = document.createElement('tr');

        // channel td
        var channel_e = document.createElement('td');
        channel_e.classList.add('channel-discord');
        channel_e.classList.add('mobile-discord');

        channel_e.textContent = msg.channel;
        user_row.appendChild(channel_e);

        // user td
        var author_e = document.createElement('td');
        author_e.classList.add('author-discord');
        author_e.classList.add('mobile-discord');

        author_e.textContent = msg.user;
        user_row.appendChild(author_e);

        if(channel_change){
            user_row.classList.add('channel-change');
        }

        returnlist.unshift(user_row);
    }

    var message_row = document.createElement('tr');

    var timestamp_e = document.createElement('td');
    timestamp_e.classList.add('timestamp-discord');
    timestamp_e.classList.add('mobile-discord');

    timestamp_e.textContent = msg.timestamp;

    var message_e = document.createElement('td');
    message_e.classList.add('message-discord');
    message_e.classList.add('mobile-discord');

    // message_e.textContent = msg.text;
    message_e.innerHTML = convert_discord_message(msg.text);

    if (msg.hasOwnProperty('highlight') && typeof msg.highlight !== 'undefined') {
        message_row.id = 'highlight-' + msg.highlight;
    }

    if (emphasis) {
        message_row.classList.add('emphasized');
    }

    message_row.appendChild(timestamp_e);
    message_row.appendChild(message_e);

    returnlist.unshift(message_row);

    if (msg.hasOwnProperty('comment') && typeof msg.comment !== 'undefined' && msg.comment !== "") {
        var comment_row = document.createElement('tr');

        comment_row.classList.add('comment-discord');
        comment_row.classList.add('mobile-discord');

        var comment_e = document.createElement('td');
        // comment_e.classList.add('comment-discord');
        // comment_e.classList.add('mobile-discord');

        comment_e.innerHTML = convert_discord_message(msg.comment);

        var comment_counter_e = document.createElement('td');
        comment_counter_e.textContent = '#' + msg.comment_count;

        comment_row.appendChild(comment_counter_e);
        comment_row.appendChild(comment_e);

        returnlist.unshift(comment_row);
    }

// console.log(returnlist);
    return returnlist;
};

var construct_message_discord = function(msg, channel_change, emphasis) {
    channel_change = typeof channel_change !== 'undefined' ? channel_change : false;
    emphasis = typeof emphasis !== 'undefined' ? emphasis : false;

    var row = document.createElement('tr');

    var channel_timestamp_e = document.createElement('td');

    var channel_e = document.createElement('div');
    channel_e.classList.add('channel-discord');

    channel_e.textContent = msg.channel;

    var timestamp_e = document.createElement('div');
    timestamp_e.classList.add('timestamp-discord');

    timestamp_e.textContent = msg.timestamp;

    channel_timestamp_e.appendChild(channel_e);
    channel_timestamp_e.appendChild(timestamp_e);

    row.appendChild(channel_timestamp_e);

    var author_e = document.createElement('td');
    author_e.classList.add('author-discord');

    author_e.textContent = msg.user;

    row.appendChild(author_e);

    var message_e = document.createElement('td');
    message_e.classList.add('message-discord');

    // message_e.textContent = msg.text;
    message_e.innerHTML = convert_discord_message(msg.text);

    if (msg.hasOwnProperty('highlight') && typeof msg.highlight !== 'undefined' && msg.highlight !== "") {
        message_e.id = 'highlight-' + msg.highlight;
    }

    row.appendChild(message_e);

    if (msg.hasOwnProperty('comment') && typeof msg.comment !== 'undefined') {
        var comment_e = document.createElement('td');
        comment_e.classList.add('comment-discord');
        comment_e.innerHTML = "#" + msg.comment_count + ": " + convert_discord_message(msg.comment);
        row.appendChild(comment_e);
    }

    if (emphasis) {
        row.classList.add('emphasis');
    }

    if (channel_change){
        row.classList.add('channel-change');
    }

    return [row];
};

var construct_message_youtube_mobile = function(msg, emphasis) {
    // console.log(msg);
    emphasis = typeof emphasis !== 'undefined' ? emphasis : false;

    var returnlist = [];

    var message_row = document.createElement('tr');
    var message_td = document.createElement('td');

    var timestamp_e = document.createElement('span');
    timestamp_e.classList.add('timestamp-youtube');
    timestamp_e.classList.add('mobile-youtube');

    timestamp_e.textContent = msg.timestamp;

    message_td.appendChild(timestamp_e);

    var author_e = document.createElement('span');
    author_e.classList.add('author-youtube');
    author_e.classList.add('mobile-youtube');

    author_e.textContent = msg.user;

    message_td.appendChild(author_e);

    var message_e = document.createElement('span');
    message_e.classList.add('message-youtube');
    message_e.classList.add('mobile-youtube');

    // message_e.textContent = msg.text;
    message_e.innerHTML = convert_youtube_message(msg.text);

    if (msg.hasOwnProperty('highlight') && typeof msg.highlight !== 'undefined' && msg.highlight !== '') {
        message_e.id = 'highlight-' + msg.highlight;
    }

    message_td.appendChild(message_e);
    message_row.appendChild(message_td);
    if (emphasis) {
        message_row.classList.add('emphasis');
    }
    returnlist.unshift(message_row);

    if (msg.hasOwnProperty('comment') && typeof msg.comment !== 'undefined') {
        var comment_row = document.createElement('tr');
        var comment_td = document.createElement('td');

        var comment_e = document.createElement('span');
        comment_row.classList.add('comment-youtube');
        comment_row.classList.add('mobile-youtube');

        comment_e.innerHTML = "#" + msg.comment_count + ": " + convert_youtube_message(msg.comment);

        // var comment_container_e = document.createElement('td');
        // comment_container_e.appendChild(comment_e);

        comment_td.appendChild(comment_e);
        // comment_row.appendChild(comment_container_e);
        comment_row.appendChild(comment_td);
        returnlist.unshift(comment_row);
    }

    return returnlist;
};

var construct_message_youtube = function(msg, emphasis) {
    emphasis = typeof emphasis !== 'undefined' ? emphasis : false;

    var row = document.createElement('tr');
    var row_td = document.createElement('td');

    var timestamp_e = document.createElement('span');
    timestamp_e.classList.add('timestamp-youtube');

    timestamp_e.textContent = msg.timestamp;

    row_td.appendChild(timestamp_e);

    var author_e = document.createElement('span');
    author_e.classList.add('author-youtube');

    author_e.textContent = msg.user;

    row_td.appendChild(author_e);

    var message_e = document.createElement('span');
    message_e.classList.add('message-youtube');

    // message_e.textContent = msg.text;
    message_e.innerHTML = convert_youtube_message(msg.text);

    if (msg.hasOwnProperty('highlight')) {
        message_e.id = 'highlight-' + msg.highlight;
    }

    row_td.appendChild(message_e);
    row.appendChild(row_td);

    if (msg.hasOwnProperty('comment') && typeof msg.comment !== 'undefined' && msg.comment !== "") {
        var comment_e = document.createElement('td');
        comment_e.classList.add('comment-youtube');
        comment_e.innerHTML = "#" + msg.comment_count + ": " + convert_youtube_message(msg.comment);
        row.appendChild(comment_e);
    }

    if (emphasis) {
        row.classList.add('emphasis');
    }

    return [row];
};


$('#explanationModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var doc = button.data('explanation'); // Extract info from data-* attributes
    var tit = button.data('title');
    var modal = $(this);
    $.ajax('/explanation/' + doc + '.md', {
        dataType: 'text'
    }).done(function(text) {
        var converter = new showdown.Converter();
        html = converter.makeHtml(text);
        modal.find('.modal-title')[0].textContent = tit;
        modal.find('.modal-body')[0].innerHTML = html;
    }).fail(function(xhr, status, e) {});
    gtag('event', 'explanationModal-' + 'doc', {
        'send_to': 'UA-112273089-1'
    });
    timer = performance.now();
});

$('#explanationModal').on('hide.bs.modal', function(e) {
    gtag('event', 'explanationModal_close');
    gtag('event', 'timing_complete', {
        'name': 'explanationModal_read-' + $(this).find('.modal-title')[0].textContent.replace(/\ /g, "-"),
        'value': Math.round(performance.now() - timer),
        'event_category': 'reading_time'
    });
    timer = 0;
});


log_comments_under = false;
$(window).resize(function() {
    if ($(this).width() < 992) {
        mobile_layout = true;
    } else {
        mobile_layout = false;
    }
});

$('#discordlogModal .modal-datepicker').datepicker({
    format: "yyyy-mm-dd",
    maxViewMode: 0,
    autoclose: true,
    startDate: "2017-11-03",
    endDate: "2017-12-31"
}).datepicker('update', discorddate).on('changeDate', function(e) {
    var modal = $('#discordlogModal');
    dd = e.format('yyyy-mm-dd');
    document.cookie = "discorddate=" + dd + ";";
    discorddate = dd;
    modal.modal('hide');
    modal.on('hidden.bs.modal', function() {
        $(this).modal('show');
        $(this).unbind('hidden.bs.modal');
    });
    gtag('event', 'discordlogModal_datepick-' + dd);
});

$('#discordlogModal .prevday').on('click', function(e) {
    scroll_to_top_next = true;
    dd = $('#discordlogModal .modal-datepicker').datepicker('getUTCDate');
    mome = moment.utc(dd);
    mome.subtract(1, 'days');
    discorddate = mome.format('YYYY-MM-DD');
    $('#discordlogModal .modal-datepicker').datepicker('setUTCDate', mome.toDate());
    gtag('event', 'discordlogModal_prevday');
});

$('#discordlogModal .nextday').on('click', function(e) {
    scroll_to_top_next = true;
    dd = $('#discordlogModal .modal-datepicker').datepicker('getUTCDate');
    mome = moment.utc(dd);
    mome.add(1, 'days');
    discorddate = mome.format('YYYY-MM-DD');
    $('#discordlogModal .modal-datepicker').datepicker('setUTCDate', mome.toDate());
    gtag('event', 'discordlogModal_nextday');
});

$('#discordlogModal').on('hide.bs.modal', function(e) {
    gtag('event', 'discordlogModal_close');
    gtag('event', 'timing_complete', {
        'name': 'discordlogModal_read',
        'value': Math.round(performance.now() - timer),
        'event_category': 'reading_time'
    });
    timer = 0;
});

$('#discordlogModal .nextcomm').on('click', function(e) {
var l = $('.comment-discord').filter(function(idx, elem){ return elem.previousSibling.previousSibling.offsetTop  > $('#discordlogModal .modal-body').scrollTop()})
$('#discordlogModal .modal-body')[0].scrollTop = l[0].previousSibling.previousSibling.offsetTop;
    gtag('event', 'discordlogModal_nextcomm');
});

$('#discordlogModal .prevcomm').on('click', function(e) {
var l = $('.comment-discord').filter(function(idx, elem){ return elem.previousSibling.previousSibling.offsetTop  < $('#discordlogModal .modal-body').scrollTop()})
$('#discordlogModal .modal-body')[0].scrollTop = l[l.length - 1].previousSibling.previousSibling.offsetTop;
    gtag('event', 'discordlogModal_prevcomm');
});
/*
$('#discordlogModal .modal-body')[0].scrollTop = ($('.comment-discord').filter(function(idx, elem){ return elem.offsetTop > $('#discordlogModal .modal-body').scrollTop()})[1].offsetTop - 100)
*/


$('#discordlogModal').on('show.bs.modal', function(event) {
    timer = performance.now();
    gtag('event', 'discordlogModal');
    currentutcdate = $('#discordlogModal .modal-datepicker').datepicker('getUTCDate');

    startdate = $('#discordlogModal .modal-datepicker').datepicker('getStartDate');

    enddate = $('#discordlogModal .modal-datepicker').datepicker('getEndDate');
    if (currentutcdate.getTime() == startdate.getTime()) {
        $('#discordlogModal .prevday').prop('disabled', true);
    } else {
        $('#discordlogModal .prevday').prop('disabled', false);
    }

    if (currentutcdate.getTime() == enddate.getTime()) {
        $('#discordlogModal .nextday').prop('disabled', true);
    } else {
        $('#discordlogModal .nextday').prop('disabled', false);
    }

    var cookies = document.cookie;

    d = discorddate;

    var modal = $(this);
    modal.find('.dropdown-menu').empty();
    modal.find('.modal-title').html('Discord</br>' + d);
    tbl = document.querySelector('#discordlogModal .logtable tbody');
    tbl.innerHTML = "";
    tbl.style = "display: none";
    $.ajax('/log/' + 'discord' + '/' + d + '.json', {
        dataType: 'text',
        type: 'GET'
    }).done(function(text) {

        chatlog = JSON.parse(text);

        var previous_user = "";
        var previous_channel = "";
        var highlights = 0;
        var comments = 0;
        modal.find('.dropdown-toggle').prop('disabled', true);
        for (i = 0; i < chatlog.length; i++) {
            if (chatlog[i].length > 5) {
                modal.find('.dropdown-menu').append("<a class=\"dropdown-item\" href=\"#highlight-" + chatlog[i][5] + "\">" + chatlog[i][5] + "</a>");
                highlights++;
            }
            var r = null;
            if(typeof chatlog[i][4] !== 'undefined' && chatlog[i][4] !== ""){
                comments++;
            }
            var o = {
                channel: (typeof chatlog[i][0] !== 'undefined' && chatlog[i][0] !== "") ? '#' + chatlog[i][0] : "",
                timestamp: chatlog[i][1],
                user: chatlog[i][2],
                text: typeof chatlog[i][3] !== 'undefined' ? chatlog[i][3] : "",
                comment: typeof chatlog[i][4] !== 'undefined' && chatlog[i][4] !== "" ? chatlog[i][4] : undefined,
                highlight: typeof chatlog[i][5] !== 'undefined' && chatlog[i][5] !== "" ? chatlog[i][5] : undefined,
                comment_count: comments
            };
            var give_user_line = true;
            if (previous_user == chatlog[i][2]){
                give_user_line = false;
            }
            var channel_change = false;
            if (previous_channel !== chatlog[i][0] && typeof chatlog[i][0] !== 'undefined' && chatlog[i][0] !== ""){
                channel_change = true;
                give_user_line = true;
            }
            if ($(window).width() < 992) {
                r = construct_message_mobile_discord(o, give_user_line, channel_change, false);
            } else {
                r = construct_message_discord(o, channel_change, false);
            }
            while (r.length) {
                tbl.appendChild(r.pop());
            }

            previous_user = chatlog[i][2];
            previous_channel = (typeof chatlog[i][0] !== 'undefined' && chatlog[i][0] !== "") ? chatlog[i][0] : previous_channel;
        }
        modal.find('.loading').hide();
        tbl.removeAttribute('style');
        $('.logtable td').linkify();
        modal.find('.highlight-counter')[0].textContent = "(" + highlights + ")";
        if(highlights){
            modal.find('.dropdown-toggle').prop('disabled', false);
        }
        modal.find('.comment-counter')[0].textContent = "(" + comments + ")";
    }).fail(function(xhr, status, e) {
        modal.find('.fa-spinner').removeClass('fa-spinner').addClass('fa-exclamation-triangle');
    });
});

$('#discordlogModal').on('shown.bs.modal', function(event) {
    if(scroll_to_top_next){
    $(this).find('.modal-body')[0].scrollTop = 0;
        scroll_to_top_next = false;
    }
});

$('#ytlogModal .nextcomm').on('click', function(e) {
var l = $('.comment-youtube').filter(function(idx, elem){ return elem.previousSibling.offsetTop  > $('#ytlogModal .modal-body').scrollTop();});
$('#ytlogModal .modal-body')[0].scrollTop = l[0].previousSibling.offsetTop;
    gtag('event', 'ytlogModal_nextcomm');
});

$('#ytlogModal .prevcomm').on('click', function(e) {
var l = $('.comment-youtube').filter(function(idx, elem){ return elem.previousSibling.offsetTop  < $('#ytlogModal .modal-body').scrollTop();});
$('#ytlogModal .modal-body')[0].scrollTop = l[l.length - 1].previousSibling.offsetTop;
    gtag('event', 'ytlogModal_prevcomm');
});


$('#ytlogModal .modal-datepicker').datepicker({
    format: "yyyy-mm-dd",
    maxViewMode: 0,
    autoclose: true,
    startDate: "2017-09-25",
    endDate: "2017-11-03",
    datesDisabled: ytdisableddates
}).datepicker('update', ytdate).on('changeDate', function(e) {
    var modal = $('#ytlogModal');
    dd = e.format('yyyy-mm-dd');
    document.cookie = "ytdate=" + dd + ";";
    ytdate = dd;
    modal.modal('hide');
    modal.on('hidden.bs.modal', function() {
        $(this).modal('show');
        $(this).unbind('hidden.bs.modal');
    });
    gtag('event', 'ytlogModal_datepick-' + dd);
});

$('#ytlogModal .prevday').on('click', function(e) {

    dd = $('#ytlogModal .modal-datepicker').datepicker('getUTCDate');
    mome = moment.utc(dd);
    do {
        mome.subtract(1, 'days');
    } while (ytdisableddates.includes(mome.format('YYYY-MM-DD')));
    ytdate = mome.format('YYYY-MM-DD');
    $('#ytlogModal .modal-datepicker').datepicker('setUTCDate', mome.toDate());
    gtag('event', 'ytlogModal_prevday');
});

$('#ytlogModal .nextday').on('click', function(e) {

    dd = $('#ytlogModal .modal-datepicker').datepicker('getUTCDate');
    mome = moment.utc(dd);
    do {
        mome.add(1, 'days');
    } while (ytdisableddates.includes(mome.format('YYYY-MM-DD')));
    ytdate = mome.format('YYYY-MM-DD');
    $('#ytlogModal .modal-datepicker').datepicker('setUTCDate', mome.toDate());
    gtag('event', 'ytlogModal_nextday');
});

$('#ytlogModal').on('hide.bs.modal', function(e) {
    gtag('event', 'ytlogModal_close');
    gtag('event', 'timing_complete', {
        'name': 'ytlogModal_read',
        'value': Math.round(performance.now() - timer),
        'event_category': 'reading_time'
    });
    timer = 0;
});

$('#ytlogModal .nextcomm').on('click', function(e) {
var l = $('.comment-youtube').filter(function(idx, elem){ return elem.previousSibling.previousSibling.offsetTop  > $('#ytlogModal .modal-body').scrollTop()})
$('#ytlogModal .modal-body')[0].scrollTop = l[0].previousSibling.previousSibling.offsetTop;
    gtag('event', 'ytlogModal_nextcomm');
});

$('#ytlogModal .prevcomm').on('click', function(e) {
var l = $('.comment-youtube').filter(function(idx, elem){ return elem.previousSibling.previousSibling.offsetTop  < $('#ytlogModal .modal-body').scrollTop()})
$('#ytlogModal .modal-body')[0].scrollTop = l[l.length - 1].previousSibling.previousSibling.offsetTop;
    gtag('event', 'ytlogModal_prevcomm');
});

$('#ytlogModal').on('show.bs.modal', function(event) {
    timer = performance.now();
    gtag('event', 'ytlogModal');


    currentutcdate = $('#ytlogModal .modal-datepicker').datepicker('getUTCDate');
    startdate = $('#ytlogModal .modal-datepicker').datepicker('getStartDate');
    enddate = $('#ytlogModal .modal-datepicker').datepicker('getEndDate');

    if (currentutcdate.getTime() == startdate.getTime()) {
        $('#ytlogModal .prevday').prop('disabled', true);
    } else {
        $('#ytlogModal .prevday').prop('disabled', false);
    }

    if (currentutcdate.getTime() == enddate.getTime()) {
        $('#ytlogModal .nextday').prop('disabled', true);
    } else {
        $('#ytlogModal .nextday').prop('disabled', false);
    }

    var cookies = document.cookie;

    d = ytdate;

    var modal = $(this);

    modal.find('.dropdown-menu').empty();
    modal.find('.modal-title').html('YouTube</br>' + d);
    tbl = document.querySelector('#ytlogModal .logtable tbody');
    tbl.innerHTML = "";
    tbl.style = "display: none";

    $.ajax('/log/' + 'yt' + '/' + d + '.json', {
        dataType: 'text'
    }).done(function(text) {

        chatlog = JSON.parse(text);

var comments_y = 0;
var highlights_y = 0;
        modal.find('.dropdown-toggle').prop('disabled', true);
        for (i = 0; i < chatlog.length; i++) {
            if (chatlog[i].length > 4) {
                modal.find('.dropdown-menu').append("<a class=\"dropdown-item\" href=\"#highlight-" + chatlog[i][4] + "\">" + chatlog[i][4] + "</a>");
                highlights_y++;
            }
            var r = null;
            if(typeof chatlog[i][3] !== 'undefined' && chatlog[i][3] !== ""){
                comments_y++;
            }
            var o = {
                timestamp: chatlog[i][0],
                user: chatlog[i][1],
                text: typeof chatlog[i][2] !== 'undefined' ? chatlog[i][2] : "",
                comment: typeof chatlog[i][3] !== 'undefined' || chatlog[i][3] === "" ? chatlog[i][3] : undefined,
                highlight: typeof chatlog[i][4] !== 'undefined' || chatlog[i][4] === "" ? chatlog[i][4] : undefined,
                comment_count: comments_y
            };
            // console.log(o);
            if ($(window).width() < 992) {
                r = construct_message_youtube_mobile(o, false);
            } else {
                r = construct_message_youtube(o, false);
            }
            while (r.length) {
                tbl.appendChild(r.pop());
            }
        }
        modal.find('.loading').hide();
        tbl.removeAttribute('style');
        modal.find('.highlight-counter')[0].textContent = "(" + highlights_y + ")";
        if(highlights_y){
            modal.find('.dropdown-toggle').prop('disabled', false);
        }
        modal.find('.comment-counter')[0].textContent = "(" + comments_y + ")";
    }).fail(function(xhr, status, e) {
        modal.find('.fa-spinner').removeClass('fa-spinner').addClass('fa-exclamation-triangle');
    });
});

$('#ytlogModal').on('shown.bs.modal', function(event) {
    if(scroll_to_top_next){
    $(this).find('.modal-body').scrollTop = 0;
        scroll_to_top_next = false;
    }
});
