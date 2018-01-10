// Code goes here
// jshint esversion: 6


var mech_data = {
    "labels": ["2017-11-02", "2017-11-03", "2017-11-04", "2017-11-05", "2017-11-06", "2017-11-07", "2017-11-08", "2017-11-09", "2017-11-10", "2017-11-11", "2017-11-12", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-16", "2017-11-17", "2017-11-18", "2017-11-19", "2017-11-20", "2017-11-21", "2017-11-22", "2017-11-23", "2017-11-24", "2017-11-25", "2017-11-26", "2017-11-27", "2017-11-29", "2017-11-30", "2017-12-02", "2017-12-03", "2017-12-04", "2017-12-05", "2017-12-06", "2017-12-07", "2017-12-08", "2017-12-09", "2017-12-10", "2017-12-12", "2017-12-13", "2017-12-14", "2017-12-15", "2017-12-16", "2017-12-17", "2017-12-18", "2017-12-19", "2017-12-21", "2017-12-23", "2017-12-24", "2017-12-25", "2017-12-26", "2017-12-27", "2017-12-28", "2017-12-29", "2017-12-30", "2017-12-31", "2018-01-02", "2018-01-03", "2018-01-04"],
    "series": [3, 150, 277, 207, 505, 60, 42, 66, 78, 809, 122, 176, 247, 126, 37, 332, 60, 110, 26, 50, 11, 77, 422, 50, 16, 69, 93, 297, 17, 213, 41, 112, 156, 113, 245, 35, 14, 17, 3, 2, 58, 15, 13, 51, 2, 3, 73, 17, 19, 33, 69, 81, 165, 18, 120, 1, 4, 2]
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
    "labels": ["2017-11-02", "2017-11-03", "2017-11-04", "2017-11-05", "2017-11-06", "2017-11-07", "2017-11-08", "2017-11-09", "2017-11-10", "2017-11-11", "2017-11-12", "2017-11-13", "2017-11-14", "2017-11-15", "2017-11-16", "2017-11-17", "2017-11-18", "2017-11-19", "2017-11-20", "2017-11-21", "2017-11-22", "2017-11-23", "2017-11-24", "2017-11-25", "2017-11-26", "2017-11-27", "2017-11-28", "2017-11-29", "2017-11-30", "2017-12-01", "2017-12-02", "2017-12-03", "2017-12-04", "2017-12-05", "2017-12-06", "2017-12-07", "2017-12-08", "2017-12-09", "2017-12-10", "2017-12-12", "2017-12-13", "2017-12-14", "2017-12-15", "2017-12-16", "2017-12-17", "2017-12-18", "2017-12-19", "2017-12-20", "2017-12-21", "2017-12-22", "2017-12-23", "2017-12-24", "2017-12-25", "2017-12-26", "2017-12-27", "2017-12-28", "2017-12-29", "2017-12-30", "2017-12-31", "2018-01-02", "2018-01-03", "2018-01-04"],
    "series": [3, {
        meta: "First day",
        value: 1267
    }, 886, 577, 983, 198, 82, 118, 164, 1873, 273, 412, 623, 227, 77, 736, 99, 181, 69, 86, 13, 146, 1016, 89, 27, 126, 2, 265, 730, 46, 24, 419, 92, 197, 320, 249, 467, 76, 21, 22, 3, 2, 92, 27, 30, 88, 3, 131, 42, 8, 140, 27, 32, 79, 168, 174, 319, 30, 207, 1, 5, 2]
};

function pad_data(object) {
    m = moment.utc("2017-11-02");
    e = moment.utc("2017-12-31");

    labels = [];
    while (m.diff(e, 'days') < 0) {
        labels.push(m.format("YYYY-MM-DD"));
        m.add(1, 'days');
    }
    for (i = 0; i < labels.length; i++) {
        if (object.labels[i] != labels[i]) {
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
                axisTitle: 'Date',
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


chart = new Chartist.Line('#msg-over-time-graph', data, options, responsive_options);

chart.on('draw', (ctx) => {
    m = window.matchMedia("(min-width: 1281px)").matches;
    if (m) {
        if (ctx.type === 'label' && ctx.text.toString().match(/\d\d-\d\d/)) {
            // console.log(ctx)
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

chart2 = new Chartist.Bar('#overstate-lisa', {
    labels: ['lisa-1'],
    series: [
        [800000],
        [0],
        [100000],
        [324234]
    ]
}, emotion_opts).on('draw', emfunc);

chart3 = new Chartist.Bar('#understate-lisa', {
    labels: ['lisa-1'],
    series: [
        [800000],
        [0],
        [100000],
        [324234]
    ]
}, emotion_opts).on('draw', emfunc);

chart3 = new Chartist.Bar('#overstate-mechalynx', {
    labels: ['lisa-1'],
    series: [
        [800000],
        [0],
        [100000],
        [324234]
    ]
}, emotion_opts).on('draw', emfunc);

chart3 = new Chartist.Bar('#understate-mechalynx', {
    labels: ['lisa-1'],
    series: [
        [800000],
        [0],
        [100000],
        [324234]
    ]
}, emotion_opts).on('draw', emfunc);

chart3 = new Chartist.Bar('#overstate-antoine', {
    labels: ['lisa-1'],
    series: [
        [800000],
        [0],
        [100000],
        [324234]
    ]
}, emotion_opts).on('draw', emfunc);

chart3 = new Chartist.Bar('#understate-antoine', {
    labels: ['lisa-1'],
    series: [
        [800000],
        [0],
        [100000],
        [324234]
    ]
}, emotion_opts).on('draw', emfunc);


$('#explanationModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var doc = button.data('explanation'); // Extract info from data-* attributes
    var tit = button.data('title');
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    // modal.find('.modal-title').text('New message to ' + recipient)
    // modal.find('.modal-body input').val(recipient)
    console.log(doc);
    $.ajax('/explanation/' + doc + '.md', {
        dataType: 'text'
    }).done(function(text) {
        console.log(text);
        var converter = new showdown.Converter();
        html = converter.makeHtml(text);
        modal.find('.modal-title')[0].textContent = tit;
        modal.find('.modal-body')[0].innerHTML = html;
    }).fail(function(xhr, status, e) {
        console.log('failed');
        console.log(status);
        console.log(e);
        console.log(xhr);
    });
});

discorddate = '2017-11-03';
ytdate = '2017-09-25';

ytdisableddates = [
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



log_comments_under = false;
$(window).resize(function() {
    if ($(this).width() < 992) {
        log_comments_under = true;
    } else {
        log_comments_under = false;
    }
});

        $('.modal-datepicker').datepicker();



currentmodal = '';
$('#discordlogModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var logtype = button.data('logtype'); // Extract info from data-* attributes
    console.log("LOGTYPE" + logtype)
    if (typeof logtype == 'undefined') {
        logtype = currentmodal;
    }
    currentmodal = logtype;
    console.log('currentmodal' + currentmodal)



    if (currentmodal == 'discord') {

        $('#prevday').unbind('click').on('click', function(e) {

            dd = $('.modal-datepicker').datepicker('getUTCDate');
            mome = moment.utc(dd);
            mome.subtract(1, 'days');
            discorddate = mome.format('YYYY-MM-DD');
            $('.modal-datepicker').datepicker('setUTCDate', mome.toDate());
        });

        $('#nextday').unbind('click').on('click', function(e) {

            dd = $('.modal-datepicker').datepicker('getUTCDate');
            mome = moment.utc(dd);
            mome.add(1, 'days');
            discorddate = mome.format('YYYY-MM-DD');
            $('.modal-datepicker').datepicker('setUTCDate', mome.toDate());
        });

        $('.modal-datepicker').datepicker({
            format: "yyyy-mm-dd",
            maxViewMode: 0,
            autoclose: true,
            startDate: "2017-11-03",
            endDate: "2017-12-31"
        }).datepicker('update', discorddate).unbind('changeDate').on('changeDate', function(e) {
            var modal = $('#logModal');
            dd = e.format('yyyy-mm-dd');
            document.cookie = "discorddate=" + dd + ";";
            discorddate = dd;
            modal.modal('hide');
            modal.on('hidden.bs.modal', function() {
                $(this).modal('show');
                $(this).unbind('hidden.bs.modal');

            });
        });


    } else if (currentmodal == 'yt') {

        $('#prevday').unbind('click').on('click', function(e) {

            dd = $('.modal-datepicker').datepicker('getUTCDate');
            mome = moment.utc(dd);
            mome.subtract(1, 'days');
            ytdate = mome.format('YYYY-MM-DD');
            $('.modal-datepicker').datepicker('setUTCDate', mome.toDate());
        });

        $('#nextday').unbind('click').on('click', function(e) {

            dd = $('.modal-datepicker').datepicker('getUTCDate');
            mome = moment.utc(dd);
            mome.add(1, 'days');
            ytdate = mome.format('YYYY-MM-DD');
            $('.modal-datepicker').datepicker('setUTCDate', mome.toDate());
        });

        $('.modal-datepicker').datepicker({
            format: "yyyy-mm-dd",
            maxViewMode: 0,
            autoclose: true,
            startDate: "2017-09-25",
            endDate: "2017-11-03",
            datesDisabled: ytdisableddates
        }).datepicker('update', ytdate).unbind('changeDate').on('changeDate', function(e) {
            var modal = $('#logModal');
            dd = e.format('yyyy-mm-dd');
            document.cookie = "ytdate=" + dd + ";";
            ytdate = dd;
            modal.modal('hide');
            modal.on('hidden.bs.modal', function() {
                $(this).modal('show');
                $(this).unbind('hidden.bs.modal');

            });
        });

    }

    currentutcdate = $('.modal-datepicker').datepicker('getUTCDate');
    console.log(currentutcdate);
    startdate = $('.modal-datepicker').datepicker('getStartDate');
    console.log(startdate);

    enddate = $('.modal-datepicker').datepicker('getEndDate');
    if (currentutcdate == startdate) {
        $('#prevday').prop('disabled', true);
    } else {

        $('#prevday').prop('disabled', false);
    }

    if (currentutcdate == enddate) {
        $('#nextday').prop('disabled', true);
    } else {

        $('#nextday').prop('disabled', false);
    }

    var cookies = document.cookie;

    if (currentmodal = 'discord') {
        d = discorddate;
    } else if (currentmodal = 'yt') {
        d = ytdate;
    }

    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.dropdown-menu').empty();
    if (currentmodal == 'discord') {
        modal.find('.modal-title').html('Discord</br>' + d);
    } else if (currentmodal == 'yt') {
        modal.find('.modal-title').html('YouTube</br>' + d);
    }
    // modal.find('.modal-title').text('New message to ' + recipient)
    // modal.find('.modal-body input').val(recipient)
    console.log(logtype + d);
    tbl = document.querySelector('#logtable tbody');
    tbl.innerHTML = "";
    $.ajax('/log/' + currentmodal + '/' + d + '.json', {
        dataType: 'text'
    }).done(function(text) {
        console.log(text);
        chatlog = JSON.parse(text);
        console.log(chatlog);
        // FIGURE OUT JSON
        // var converter = new showdown.Converter();
        // converter.setOption('noHeaderId', true);
        // converter.setOption('simplifiedAutoLink', true);
        // converter.setOption('literalMidWordUnderscores', true);
        // converter.setOption('strikethrough', true);
        // converter.setOption('requireSpaceBeforeHeadingText', true);
        for (i = 0; i < chatlog.length; i++) {
            t = document.createElement('tr');
            for (j = 0; j < 3; j++) {
                td = document.createElement('td');
                if (j == 2) {
                    // s = chatlog[i][j].replace(/(\/|\\|\{|\}|\[|\]|\(|\)|\#|\+|\-|\.|\!)/, "\\$&" );
                    // td.innerHTML = converter.makeHtml(chatlog[i][j]);
                    // td.innerHTML = converter.makeHtml(s);
                    td.textContent = chatlog[i][j];
                    $(td).linkify();
                } else {

                    td.textContent = chatlog[i][j];
                }
                t.appendChild(td);
            }

            if (chatlog[i].length > 4) {
                t.setAttribute("id", "highlight-" + chatlog[i][4]);
                console.log('have anchor!');
                modal.find('.dropdown-menu').append("<a class=\"dropdown-item\" href=\"#highlight-" + chatlog[i][4] + "\">" + chatlog[i][4] + "</a>");
            }
            if (chatlog[i].length > 3) {
                if ($(window).width() < 992) {
                    tr2 = document.createElement('tr');
                    tr2.appendChild(document.createElement('td'));
                    tr2.appendChild(document.createElement('td'));
                    cmnt = document.createElement('td');
                    cmnt.innerHTML = '<code>' + chatlog[i][3] + '</code>';
                    tr2.appendChild(cmnt);
                } else {
                    cmnt = document.createElement('td');
                    cmnt.innerHTML = '<code>' + chatlog[i][3] + '</code>';
                    t.appendChild(cmnt);
                }
            }
            tbl.appendChild(t);
            if (typeof tr2 != 'undefined') {
                tbl.appendChild(tr2);
            }
        }
    }).fail(function(xhr, status, e) {
        console.log('failed');
        console.log(status);
        console.log(e);
        console.log(xhr);
    });
});
