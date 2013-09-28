window.onload = function () {
    var data = new Array(5);
    $.each(data, function (index, value) {
        setTimeout(function () {
            $('#showTimer').append(data.length - index + " ");
            if (index === data.length-1) {

                renderSlideshow();
            }
        }, 1000 + index * 1000);

    });


};


function renderSlideshow() {


    var callUrl = 'http://miapgkhematarwd.msad.ms.com/RefreshLiveConfig/api/Values/';
    $.ajax({
        url: callUrl,
        contentType: "application/json",
        success: function (data) {
            //var a = JSON.parse(data);
            // alert('got response: ' + a);
            //console.log(data);
            //var count = data.length;
            //var i = 0;
            //var j = 0;
            //do {
            //    if (j == i) {
            //        if (!(j > i)) {
            //            j += 1;
            //            openedWindow = window.open(data[i].Url, '_blank', 'height=' + screen.height + ', width=' + screen.width);
            //            setTimeout(function () {
            //                openedWindow.close();
            //                i += 1;
            //                j = i;

            //            }, data[i].Time);
            //        }


            //    }

            //} while (data[i] !== undefined)
            data.reverse();
            var openedWindow = new Array();
            var TotalTime = 0;
            var PreviousTime = 0;
            var Time = new Array();

            $.each(data, function (index, value) {
                TotalTime += value.Time;
            });

            $.each(data, function (index, value) {
                openedWindow[index] = window.open(value.Url, '_blank', 'height=' + screen.height + ', width=' + screen.width);

                if (index !== 0) {
                    TotalTime -= PreviousTime;
                }
                PreviousTime = value.Time;
                setTimeout(function () {
                    openedWindow[index].close();
                }, TotalTime);
            });

        }
    });
};



function openWindow(url, timeout) {

}


function load() {


}
