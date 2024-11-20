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
        tracklistarrowimage:"tracklistarrow-48-16-1.png",
        timeformatlive:"%CURRENT% / LIVE",
        volumeimagewidth:24,
        barbackgroundimage:"",
        tracklistarrowimageheight:16,
        showtime:true,
        titleinbarwidth:80,
        showprogress:true,
        random:false,
        titleformat:"%TITLE%",
        height:600,
        loopimage:"loop-24-24-2.png",
        prevnextimage:"prevnext-24-24-1.png",
        showinfo:false,
        imageheight:100,
        skin:"BarWhiteWithPlaylist",
        responsive:true,
        loopimagewidth:24,
        showstop:false,
        prevnextimageheight:24,
        infoformat:"By %ARTIST% %ALBUM%<br />%INFO%",
        tracklistbackgroundimage:"",
        showloading:false,
        forcefirefoxflash:false,
        tracklistscroll:true,
        preloadaudio:true,
        showvolumebar:true,
        imagefullwidth:false,
        width:100,
        showimage:false,
        showloop:true,
        volumeimage:"volume-24-24-2.png",
        playpauseimagewidth:24,
        loopimageheight:24,
        tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
        prevnextimagewidth:24,
        titleinbarwidthmode:"fixed",
        forceflash:false,
        tracklistarrowimagewidth:48,
        playpauseimageheight:24,
        showbackgroundimage:false,
        stopimage:"stop-24-24-1.png",
        showvolume:true,
        playpauseimage:"playpause-24-24-1.png",
        forcehtml5:false,
        showprevnext:true,
        backgroundimage:"",
        loadingformat:"Loading...",
        progressheight:8,
        showtracklistbackgroundimage:false,
        titleinbarscroll:true,
        showtitle:true,
        defaultvolume:100,
        showtitleinbar:true,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        showtracklist:true,
        stopimageheight:24,
        volumeimageheight:24,
        stopimagewidth:24,
        volumebarheight:80,
        noncontinous:false,
        stopotherplayers:true,
        showbarbackgroundimage:false,
        volumebarpadding:8,
        imagewidth:100,
        timeformat:"%CURRENT% / %DURATION%",
        autoplay:false,
        fullwidth:false,
        loop:1,
        tracklistitem:3
    });
});