window.onload = getConfig();

function postSingleConfig() {
    
    var url = $('#Address').val();
    var time = $('#time').val()*1000;
    var zoom = $('#Zoom').val();
    var title = $('#Title').val();
    var sconfig = { "Url": url, "Time": time, "Zoom": zoom, "Title": title };
    var jsonConfig = '[' + JSON.stringify(sconfig) + "]";
    postConfig(jsonConfig);
    //$.ajax({
    //        type: "POST",
    //        url: "http://miapgkhematarwd.msad.ms.com/RefreshLiveConfig/api/Values",
    //        data: { "": jsonConfig },
    //        success: function (result) {
    //            getConfig();
    //        }
    //    });
}
function postConfig(jsonData) {
    //var jsonData = $("#jsonConfig").val();

    //$.ajax({
    //    type: "POST",
    //    url: "http://localhost:24011/api/Values",
    //    // The key needs to match your method's input parameter (case-sensitive).
    //    data: JSON.stringify(jsonData),
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (data) { alert(data); },
    //    failure: function (errMsg) {
    //        alert(errMsg);
    //    }
    //});
    
    //var p = JSON.stringify([{ "Url": "http://jive.ms.com/groups/mobilehub-hybrid", "Time": 20000, "Zoom": 100.0, "Title": "Mobile Hub Hybrid Goup in Jive" }, { "Url": "http://news.yahoo.com/", "Time": 15000, "Zoom": 100.0, "Title": "Yahoo News" }]);
    
    //var jsonData = JSON.stringify($("#jsonConfig").val());
    
    if (jsonData == null) {
        jsonData = $("#jsonConfig").val();
    }
    
    if (/^[\],:{}\s]*$/.test(jsonData.replace(/\\["\\\/bfnrtu]/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

        $.ajax({
            type: "POST",
            url: "http://miapgkhematarwd.msad.ms.com/RefreshLiveConfig/api/Values",
            data: { "": jsonData },
            success: function (result) {
                getConfig();
            }
        });

    } else {

        alert('the json is INVALID');

    }
 

}

function getConfig() {
   
    $.ajax({
        type: "GET",
        url: "http://miapgkhematarwd.msad.ms.com/RefreshLiveConfig/api/Values/",
        success: function (result) {
            $('#Textarea1').val(JSON.stringify(result));
        }
    });
}

function deleteCurrentConfig() {
    
    $.ajax({
        url: 'http://miapgkhematarwd.msad.ms.com/RefreshLiveConfig/api/Values/5',
        type: 'DELETE',
        success: function (result) {
            getConfig();
        }
    });
    
}


