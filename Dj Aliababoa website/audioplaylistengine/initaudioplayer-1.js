jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        titleinbarwidthmode:"fixed",
        timeformatlive:"%CURRENT% / LIVE",
        volumeimagewidth:24,
        barbackgroundimage:"",
        showvolumebar:true,
        showtime:true,
        titleinbarwidth:80,
        showprogress:true,
        random:false,
        titleformat:"%TITLE%",
        height:600,
        imageheight:100,
        loopimage:"loop-24-24-0.png",
        prevnextimage:"prevnext-24-24-0.png",
        showinfo:false,
        tracklistitem:10,
        skin:"BarWithPlaylist",
        responsive:true,
        loopimagewidth:24,
        showstop:false,
        prevnextimageheight:24,
        infoformat:"By %ARTIST% %ALBUM%<br />%INFO%",
        volumeimageheight:24,
        stopotherplayers:true,
        showloading:false,
        forcefirefoxflash:false,
        tracklistscroll:true,
        preloadaudio:true,
        tracklistarrowimagewidth:48,
        stopimagewidth:24,
        imagefullwidth:false,
        skinsfoldername:"",
        width:300,
        showtitleinbar:false,
        showtracklist:true,
        volumeimage:"volume-24-24-0.png",
        playpauseimagewidth:24,
        loopimageheight:24,
        tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
        prevnextimagewidth:24,
        tracklistarrowimage:"tracklistarrow-48-16-0.png",
        forceflash:false,
        playpauseimageheight:24,
        showbackgroundimage:false,
        stopimage:"stop-24-24-0.png",
        showvolume:true,
        defaultvolume:100,
        forcehtml5:false,
        showprevnext:true,
        backgroundimage:"",
        loadingformat:"Loading...",
        progressheight:8,
        showtracklistbackgroundimage:false,
        showtitle:false,
        tracklistarrowimageheight:16,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        stopimageheight:24,
        volumebarpadding:8,
        showbarbackgroundimage:false,
        volumebarheight:80,
        noncontinous:false,
        tracklistbackgroundimage:"",
        showloop:true,
        showimage:false,
        imagewidth:100,
        timeformat:"%CURRENT% / %DURATION%",
        autoplay:false,
        fullwidth:false,
        loop:1,
        playpauseimage:"playpause-24-24-0.png"
    });
});