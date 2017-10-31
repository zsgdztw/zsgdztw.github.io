
function calcp() {
    $(".wujiangself").each(function(){
        var sumwu = sumzhi = sumbing = 0;
        $(this).find(".wu").each(function(){
            sumwu += Number($(this).html());
        })
        $(this).find(".sumwu").html(sumwu);

        $(this).find(".zhi").each(function(){
            sumzhi += Number($(this).html());
        })
        $(this).find(".sumzhi").html(sumzhi);
        
        $(this).find(".bing").each(function(){
            sumbing += Number($(this).html());
        })
        $(this).find(".sumbing").html(sumbing);
        
        var armbdcp = 0;
        var i,j;
        var armbd1 = [10,29,50,73,98,125,154,185,218,253,290,329,370,413,458];
        var armbd2 = [30,80,170,300,470,680,930,1220];
        $(this).next(".armtable").find(".armbd1").each(function(){
            if(i = $(this).val()){
                armbdcp += armbd1[i-1];
            }
        })
        if(j = $(this).next(".armtable").find(".armbd2").val()){
            armbdcp += armbd2[j-1];
        }
        var cp = (sumwu+sumzhi+sumbing)*2+armbdcp;
        $(this).find(".cp").html(cp);
    })
    
    //maxcp
    var sumcp = 0;
    $(".battleself").find(".cp").each(function(){
        sumcp += Number($(this).html());
    })
    var maxcp = sumcp + Number($("#gfcp").val());
    $("#maxcp").html(maxcp);
    
    //maxcplevel
    var maxcplevel = "";
    var maxcplevellist = {
        "壯士1級":600,
        "壯士2級":900,
        "壯士3級":1350,
        "壯士4級":1700,
        "壯士5級":2400,
        "壯士6級":3600,
        "壯士7級":4900,
        "壯士8級":6200,
        "壯士9級":7500,
        "豪傑1級":8800,
        "豪傑2級":10200,
        "豪傑3級":11500,
        "豪傑4級":12800,
        "豪傑5級":14100,
        "豪傑6級":15400,
        "豪傑7級":16800,
        "豪傑8級":18100,
        "豪傑9級":19400,
        "諸侯1級":20700,
        "諸侯2級":22000,
        "諸侯3級":23400,
        "諸侯4級":24700,
        "諸侯5級":26000,
        "諸侯6級":27300,
        "諸侯7級":28600,
        "諸侯8級":30000,
        "諸侯9級":31900,
        "王侯1級":33800,
        "王侯2級":35700,
        "王侯3級":37600,
        "王侯4級":39500,
        "王侯5級":41400,
        "王侯6級":43300,
        "王侯7級":45200,
        "王侯8級":47100,
        "王侯9級":50000,
        "霸主1級":53780,
        "霸主2級":57940,
        "霸主3級":62480,
        "霸主4級":67400,
        "霸主5級":72700,
        "霸主6級":78380,
        "霸主7級":84440,
        "霸主8級":90880,
        "霸主9級":97700,
        "君王1級":105000,
        "君王2級":113200,
        "君王3級":122000,
        "君王4級":132000,
        "君王5級":142000,
        "君王6級":153000,
        "君王7級":165000,
        "君王8級":182000,
        "君王9級":202000,
        "帝王1級":223000,
        "帝王2級":244000,
        "帝王3級":265000,
        "帝王4級":286000,
        "帝王5級":308000,
        "帝王6級":330000,
        "帝王7級":352000,
        "帝王8級":375000,
        "帝王9級":398000
    };
    $.each(maxcplevellist,function(key,value){
        if(maxcp>value){
            maxcplevel = key;
        }
        else{
            return false;
        }
    })
    $("#maxcplevel").html(maxcplevel);
}

function writeError(text) {
    $("#errordialog").append('<div>'+text+'</div>');
}

$(function(){
    
    //clone self
    $(".wujiangself").clone().removeClass("battleself").appendTo(".folself");
    $(".folself").find(".wujiangin").css('float','none');
    $(".wufol").find(".wujianglist :selected").html("武隨");
    $(".zhifol").find(".wujianglist :selected").html("智隨");
    $(".bingfol").find(".wujianglist :selected").html("兵隨");
    
    //clone all
    $(".wujiangall").clone().appendTo(".tabscontent:not(:first)");
    
    //tabs
    $("#tabs").tabs();
    
    //disable input
    $(".wujiangself").find("input,select,button").not(".wujianglist").prop('disabled', true);
    $(".armtable").find("input,select,button").prop('disabled', true);
    
    //cal button
    $("#calbutton").click(function(){
        
        $(".wujiangall").each(function(){
            
            $(this).find(".wujiangself").each(function(){
                
                if($(this).find(".wujianglist :selected").val().length>2) {
                    //calbase
                    var level = $(this).find(".baselevel").val();
                    var type = $(this).find(".wujianglist").find(':selected').attr("type");
                    var typewu, typezhi, typebing;
                    switch(type) {
                            case "強襲勇將型": typewu=4; typezhi=2; typebing=3; break;
                            case "天命策士型": typewu=2; typezhi=4; typebing=3; break;
                            case "統帥將軍型": typewu=3; typezhi=2; typebing=4; break;
                            case "鬼才智將型": typewu=3; typezhi=3; typebing=3; break;
                    }
                    var oriwu = $(this).find(".wujianglist :selected").attr("wu");
                    var orizhi = $(this).find(".wujianglist :selected").attr("zhi");
                    var oribing = $(this).find(".wujianglist :selected").attr("bing");
                    var basewu = Number(oriwu)+(level-1)*typewu;
                    var basezhi = Number(orizhi)+(level-1)*typezhi;
                    var basebing = Number(oribing)+(level-1)*typebing;
                    $(this).find(".basewu").html(basewu);
                    $(this).find(".basezhi").html(basezhi);
                    $(this).find(".basebing").html(basebing);

                    //caltech
                    var mwu, mzhi, mbing;
                    var btype = $(this).find(".wujianglist").find(':selected').attr("btype");
                    switch(btype) {
                            case "槍兵":
                                mwu=$("#qiangwu").val();
                                mzhi=$("#qiangzhi").val(); 
                                mbing=$("#qiangbing").val(); break;
                            case "弓兵":
                                mwu=$("#gongwu").val(); 
                                mzhi=$("#gongzhi").val(); 
                                mbing=$("#gongbing").val(); break;
                            case "騎兵":
                                mwu=$("#qiwu").val(); 
                                mzhi=$("#qizhi").val(); 
                                mbing=$("#qibing").val(); break;
                    }
                    var techwu = Math.floor(basewu*mwu/100);
                    var techzhi = Math.floor(basezhi*mzhi/100);
                    var techbing = Math.floor(basebing*mbing/100);
                    $(this).find(".techwu").html(techwu);
                    $(this).find(".techzhi").html(techzhi);
                    $(this).find(".techbing").html(techbing);

                    //calsoul
                    var soullevel = $(this).find(".soullevel").val();
                    var typewu, typezhi, typebing;
                    switch(type){
                            case "強襲勇將型": typewu=16; typezhi=8; typebing=12; break;
                            case "天命策士型": typewu=8; typezhi=16; typebing=12; break;
                            case "統帥將軍型": typewu=12; typezhi=8; typebing=16; break;
                            case "鬼才智將型": typewu=12; typezhi=12; typebing=12; break;
                    }
                    var extra = (soullevel>29)?200:(soullevel>19)?100:(soullevel>9)?50:0;
                    var soulwu = soullevel*typewu;
                    var soulzhi = soullevel*typezhi;
                    var soulbing = soullevel*typebing+extra;
                    $(this).find(".soulwu").html(soulwu);
                    $(this).find(".soulzhi").html(soulzhi);
                    $(this).find(".soulbing").html(soulbing);

                    //calbtype
                    var bookwu = bookzhi = bookbing = 0;
                    $(this).find(".book").each(function(){
                        var book = $(this).find(':selected').val();
                        var booklevel = $(this).siblings(".booklevel").val();
                        var blueredyellow = [8,20,40,72,160];
                        var purple = [4,10,20,36,80];
                        var greenorange1 = [2,5,10,18,40];
                        var greenorange2 = [6,15,30,54,120];
                        switch(book){
                            case "武峰":
                                bookwu += blueredyellow[booklevel-1]; break;
                            case "三疑":
                                bookzhi += blueredyellow[booklevel-1]; break;
                            case "兵道":
                                bookbing += blueredyellow[booklevel-1]; break;
                            case "軍略":
                                bookwu += purple[booklevel-1];
                                bookzhi += purple[booklevel-1]; break;
                            case "金鼓":
                                bookwu += greenorange1[booklevel-1];
                                bookbing += greenorange2[booklevel-1]; break;
                            case "文伐":
                                bookzhi += greenorange1[booklevel-1];
                                bookbing += greenorange2[booklevel-1]; break;
                        }
                    })
                    var btypelevel3 = $(this).find(".btypelevel3 :selected").val();
                    var mwu = mzhi = mbing = 0;
                    switch(btypelevel3){
                        case "盾槍兵":
                        case "重騎兵": mwu=0.07; mzhi=0.03; mbing=0.1; break;
                        case "長戟兵":
                        case "驃騎兵": mwu=0.1; mzhi=0.03; mbing=0.07; break;
                        case "火矢兵": mwu=0.07; mzhi=0.1; mbing=0.03; break;
                        case "連弩兵": mwu=0.1; mzhi=0.03; mbing=0.07; break;
                    }
                    var extrawu = Math.floor(basewu*mwu);
                    var extrazhi = Math.floor(basezhi*mzhi);
                    var extrabing = Math.floor(basebing*mbing);
                    
                    //popupinfo
                    $(this).find(".btypepopup").prop("show",0);
                    if(bookwu>0||bookzhi>0||bookbing>0){
                        $(this).find(".btypepopup").prop("show",1);
                        $(this).find(".bookwupopup").html(bookwu);
                        $(this).find(".bookzhipopup").html(bookzhi);
                        $(this).find(".bookbingpopup").html(bookbing);
                        
                        if(extrawu>0){
                            $(this).find(".btypelevel3wupopup").prev("label").show();
                            $(this).find(".btypelevel3wupopup").html(extrawu);
                        }
                        if(extrazhi>0){
                            $(this).find(".btypelevel3zhipopup").prev("label").show();
                            $(this).find(".btypelevel3zhipopup").html(extrazhi);
                        }
                        if(extrabing>0){
                            $(this).find(".btypelevel3bingpopup").prev("label").show();
                            $(this).find(".btypelevel3bingpopup").html(extrabing);
                        }
                    }

                    var btypewu = bookwu+extrawu;
                    var btypezhi = bookzhi+extrazhi;
                    var btypebing = bookbing+extrabing;
                    $(this).find(".btypewu").html(btypewu);
                    $(this).find(".btypezhi").html(btypezhi);
                    $(this).find(".btypebing").html(btypebing);

                    //calstone
                    var stonewu = stonezhi = stonebing = 0;
                    var dragonlevel = $(this).find(".dragonlevel").val();
                    var dragonstar = $(this).find(".dragonstar").val();
                    var tigerlevel = $(this).find(".tigerlevel").val();
                    var tigerstar = $(this).find(".tigerstar").val();
                    var birdlevel = $(this).find(".birdlevel").val();
                    var birdstar = $(this).find(".birdstar").val();
                    var tortoiselevel = $(this).find(".tortoiselevel").val();
                    var tortoisestar = $(this).find(".tortoisestar").val();
                    var mdragon = [5,7,9,10,12,14,15,17,19];
                    var mtigerbirda = [7,10,14,17,20,23,24,27,32];
                    var mtigerbirdb = [4,5,7,9,10,12,12,14,16];
                    var mtortoise = [12,18,24,30,35,41,45,51,58];
                    for(var i=0; i<dragonlevel-1; i++){
                        stonewu += mdragon[i]*4;
                        stonezhi += mdragon[i]*4;
                        stonebing += mdragon[i]*4;
                    }
                    for(var j=0; j<dragonstar; j++){
                        stonewu += mdragon[i];
                        stonezhi += mdragon[i];
                        stonebing += mdragon[i];
                    }
                    for(var i=0; i<tigerlevel-1; i++){
                        stonewu += mtigerbirda[i]*4;
                        stonebing += mtigerbirdb[i]*4;
                    }
                    for(var j=0; j<tigerstar; j++){
                        stonewu += mtigerbirda[i];
                        stonebing += mtigerbirdb[i];

                    }
                    for(var i=0; i<birdlevel-1; i++){
                        stonezhi += mtigerbirda[i]*4;
                        stonebing += mtigerbirdb[i]*4;
                    }
                    for(var j=0; j<birdstar; j++){
                        stonezhi += mtigerbirda[i];
                        stonebing += mtigerbirdb[i];
                    }
                    for(var i=0; i<tortoiselevel-1; i++){
                        stonebing += mtortoise[i]*4;
                    }
                    for(var j=0; j<tortoisestar; j++){
                        stonebing += mtortoise[i];
                    }
                    $(this).find(".stonewu").html(stonewu);
                    $(this).find(".stonezhi").html(stonezhi);
                    $(this).find(".stonebing").html(stonebing);
                }
            })
            
            calcp();
            
            if($(this).find(".battleself :selected").val().length>2) {
                //calfol
                function cal(sum,soullevel) {
                    return Math.floor(sum/2)+((soullevel>29)?100:(soullevel>19)?50:(soullevel>9)?30:0);
                }
                
                var asso = $(this).find(".battleself :selected").attr("asso");
                function isasso(fol){
                    var result = false;
                    $.each(asso.split(","), function(key,value){
                        if(fol.includes(value)){
                            result = true;
                        }
                    })
                    return result;
                }
                
                var $wufol = $(this).find(".wufol");
                var $zhifol = $(this).find(".zhifol");
                var $bingfol = $(this).find(".bingfol");
                
                var wufol = $wufol.find(".wujiang").html();
                var zhifol = $zhifol.find(".wujiang").html();
                var bingfol = $bingfol.find(".wujiang").html();
                var wufolsum = $wufol.find(".sumwu").html();
                var zhifolsum = $zhifol.find(".sumzhi").html();
                var bingfolsum = $bingfol.find(".sumbing").html();
                var wufolsoullevel = $wufol.find(".soullevel").val();
                var zhifolsoullevel = $zhifol.find(".soullevel").val();
                var bingfolsoullevel = $bingfol.find(".soullevel").val();
                
                var basicwu = cal(wufolsum,wufolsoullevel);
                var basiczhi = cal(zhifolsum,zhifolsoullevel);
                var basicbing = cal(bingfolsum,bingfolsoullevel);
                
                var extrawu = extrazhi = extrabing = 0;
                if(isasso(wufol)){
                    extrawu = Math.floor(basicwu*0.25);
                }
                if(isasso(zhifol)){
                    extrazhi = Math.floor(basiczhi*0.25);
                }
                if(isasso(bingfol)){
                    extrabing = Math.floor(basicbing*0.25);
                }
                
                //popupinfo
                $(this).find(".folpopup").prop("show",0);
                if(basicwu>0){
                    $(this).find(".folpopup").prop("show",1);
                    $(this).find(".wufolpopup").show();
                    $(this).find(".wufolname").html(wufol);
                    $(this).find(".wufoladd").html(basicwu);
                    
                    if(extrawu>0){
                        $(this).find(".wufolassoadd").prev("label").show();
                        $(this).find(".wufolassoadd").html(extrawu);
                    }
                }
                if(basiczhi>0){
                    $(this).find(".folpopup").prop("show",1);
                    $(this).find(".zhifolpopup").show();
                    $(this).find(".zhifolname").html(zhifol);
                    $(this).find(".zhifoladd").html(basiczhi);
                    
                    if(extrazhi>0){
                        $(this).find(".zhifolassoadd").prev("label").show();
                        $(this).find(".zhifolassoadd").html(extrazhi);
                    }
                }
                if(basicbing>0){
                    $(this).find(".folpopup").prop("show",1);
                    $(this).find(".bingfolpopup").show();
                    $(this).find(".bingfolname").html(bingfol);
                    $(this).find(".bingfoladd").html(basicbing);
                    
                    if(extrabing>0){
                        $(this).find(".bingfolassoadd").prev("label").show();
                        $(this).find(".bingfolassoadd").html(extrabing);
                    }
                }
                
                var folwu = basicwu+extrawu;
                var folzhi = basiczhi+extrazhi;
                var folbing = basicbing+extrabing;
                $(this).find(".battleself").find(".folwu").html(folwu);
                $(this).find(".battleself").find(".folzhi").html(folzhi);
                $(this).find(".battleself").find(".folbing").html(folbing);
                
                //calarm
                var basewu = basezhi = basebing = 0;
                var levelwu = levelzhi = levelbing = 0;
                var slwu = slzhi = slbing = 0;
                var classwu = classzhi = classbing = 0;
                var armwu = armzhi = armbing = 0;
                
                var arm = $(this).find(".arm :selected").val();
                if(arm!=="專屬" && arm!=="無"){
                    var armtype = $(this).find(".arm :selected").attr("type");
                    var armclass = $(this).find(".armclass :selected").val();
                    var armlevel = $(this).find(".armlevel").val();
                    basewu = $(this).find(".armbasewu").val();
                    basezhi = $(this).find(".armbasezhi").val();
                    basebing = $(this).find(".armbasebing").val();

                    if(armlevel>0){
                        var levelarr;
                        switch(armtype){
                            case "劍": levelarr=[[3,2,4],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[35,32,63],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[227,224,445]];break;
                            case "刀": levelarr=[[2,2,5],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[43,35,96],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[183,145,403],[224,178,494]];break;
                            case "槍": levelarr=[[3,2,4],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[40,26,63],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[273,178,445]];break;
                            case "弓": levelarr=[[2,3,4],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[224,227,445]];break;
                            case "扇": levelarr=[[2,3,4],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[32,40,57],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[224,273,399]];break;
                        }
                        levelwu = levelarr[armlevel-1][0];
                        levelzhi = levelarr[armlevel-1][1];
                        levelbing = levelarr[armlevel-1][2];
                    }

                    $(this).find(".armsltype").each(function(){
                        var armsltype = $(this).val();
                        var armsl = $(this).siblings(".armsl").val();
                        switch(armsltype){
                            case "武力增加": slwu+=Number(armsl);break;
                            case "智力增加": slzhi+=Number(armsl);break;
                            case "兵力增加": slbing+=Number(armsl);break;
                            case "武力提升": slwu+=Math.floor((Number(basewu)+Number(levelwu))*armsl/100);break;
                            case "智力提升": slzhi+=Math.floor((Number(basezhi)+Number(levelzhi))*armsl/100);break;
                            case "兵力提升": slbing+=Math.floor((Number(basebing)+Number(levelbing))*armsl/100);break;
                        }
                    })

                    switch(armclass){
                        case "無": classwu = classzhi = classbing = 45;break;
                        case "霸": classwu = classzhi = classbing = 90;break;
                        case "極": classwu = classzhi = classbing = 180;break;
                        case "絕": classwu = classzhi = classbing = 288;break;
                    }

                    //popupinfo
                    if(armclass!=="重鑄" && armclass!=="無"){
                        $(this).find(".armclasspopup").html(armclass);
                    }
                    $(this).find(".armnamepopup").html(arm);
                    if(armlevel>0){
                        $(this).find(".armlevelpopup").html('+'+armlevel);
                    }
                    $(this).find(".armbasewupopup").html(basewu);
                    $(this).find(".armbasezhipopup").html(basezhi);
                    $(this).find(".armbasebingpopup").html(basebing);
                    $(this).find(".armlevelwupopup").html(levelwu);
                    $(this).find(".armlevelzhipopup").html(levelzhi);
                    $(this).find(".armlevelbingpopup").html(levelbing);
                    $(this).find(".armslwupopup").html(slwu);
                    $(this).find(".armslzhipopup").html(slzhi);
                    $(this).find(".armslbingpopup").html(slbing);
                    $(this).find(".armclasswupopup").html(classwu);
                    $(this).find(".armclasszhipopup").html(classzhi);
                    $(this).find(".armclassbingpopup").html(classbing);

                    armwu = Number(basewu)+Number(levelwu)+Number(slwu)+Number(classwu);
                    armzhi = Number(basezhi)+Number(levelzhi)+Number(slzhi)+Number(classzhi);
                    armbing = Number(basebing)+Number(levelbing)+Number(slbing)+Number(classbing);
                }
                
                $(this).find(".battleself").find(".armwu").html(armwu);
                $(this).find(".battleself").find(".armzhi").html(armzhi);
                $(this).find(".battleself").find(".armbing").html(armbing);
                
                $(this).find(".armpopup").prop("show",0);
                if(armwu>0||armzhi>0||armbing>0){
                    $(this).find(".armpopup").prop("show",1);
                }
            }
        })
        calcp();
        
        /*//input error
        $("#errordialog").prop("show",0);
        $(".baselevel").each(function(){
            if( $(this).val()<$(this).attr("min") || $(this).val()>$(this).attr("max") ){
                writeError("武將等級範圍：1 - 120");
                $("#errordialog").prop("show",1);
            }
        })
        
        if($("#errordialog").prop("show")){
            $("#errordialog").show().dialog({
                close: function(){
                    $("#errordialog").empty();
                }
            });
        }*/
    })
        
    //wujiang list change
    $(".wujianglist").change(function(){
        
        var wujiang = $(this).find(':selected').val();
        var btype = $(this).find(':selected').attr("btype");
        var type = $(this).find(':selected').attr("type")
        
        var $wujiang = $(this).closest(".wujiangself").find(".wujiang");
        var $btype = $(this).closest(".wujiangself").find(".wujiangbtype");
        var $type = $(this).closest(".wujiangself").find(".wujiangtype");
        var $wujiangselfinput = $(this).closest(".wujiangself").find("input,select,button").not(".wujianglist");
        var $arminput = $(this).closest(".wujiangself").next(".armtable").find("input,select,button");

        //clear wujiang output/cp, enable/disable input
        //$("#cptable").find("span").empty();
        $(this).siblings(".wujiangout").find("span").empty();
        if(wujiang.length>2){
            $wujiang.html(wujiang);
            $btype.html(btype);
            $type.html(type);
            $wujiangselfinput.prop('disabled', false);
            $arminput.prop('disabled', false);
        }
        else{
            $wujiangselfinput.prop('disabled', true);
            $arminput.prop('disabled', true);
        }
        
        //hide popup
        $(this).closest(".wujiangself").find(".popup").prop("show",0);
        
        //btype
        var blue = "武峰", red = "三疑", yellow = "兵道", purple = "軍略", green = "金鼓", orange = "文伐";
        var $book1a = $(this).closest(".wujiangself").find(".book1a");
        var $book1b = $(this).closest(".wujiangself").find(".book1b");
        var $book2a = $(this).closest(".wujiangself").find(".book2a");
        var $book2b = $(this).closest(".wujiangself").find(".book2b");
        var $book3a = $(this).closest(".wujiangself").find(".book3a");
        var $book3b = $(this).closest(".wujiangself").find(".book3b");
        var $book4a = $(this).closest(".wujiangself").find(".book4a");
        var $book4b = $(this).closest(".wujiangself").find(".book4b");
        var $book5a = $(this).closest(".wujiangself").find(".book5a");
        var $book5b = $(this).closest(".wujiangself").find(".book5b");
        var $btypelevel3a = $(this).closest(".wujiangself").find(".btypelevel3a");
        var $btypelevel3b = $(this).closest(".wujiangself").find(".btypelevel3b");
        $book1a.html(blue);
        $book1b.html(green);
        $book2a.html(red);
        $book2b.html(purple);
        $book3a.html(yellow);
        $book3b.html(orange);
        switch(btype) {
            case "槍兵":
                $btypelevel3a.html("盾槍兵");
                $btypelevel3b.html("長戟兵"); 
                $book4a.html(green);
                $book4b.html(orange);
                $book5a.html(yellow);
                $book5b.html(orange); break;
            case "弓兵":
                $btypelevel3a.html("火矢兵"); 
                $btypelevel3b.html("連弩兵"); 
                $book4a.html(purple);
                $book4b.html(orange);
                $book5a.html(red);
                $book5b.html(purple); break;
            case "騎兵":
                $btypelevel3a.html("重騎兵");  
                $btypelevel3b.html("驃騎兵");
                $book4a.html(purple);
                $book4b.html(green);
                $book5a.html(blue);
                $book5b.html(green); break;
        }
        switch(wujiang){
            case "龍膽趙雲":
            case "龍膽趙雲★":
            case "霸王孫策":
            case "霸王孫策★":
            case "浴血凌統":
            case "浴血凌統★":
                $book5a.html(blue);
                $book5b.html(green); break;
            case "麒麟姜維":
            case "麒麟姜維★":
                $book4a.html(red);
                $book4b.html(purple); break;
            case "奸雄曹操":
                $book5a.html(yellow);
                $book5b.html(orange); break;
            case "臥龍諸葛亮":
            case "臥龍諸葛亮★":
            case "業炎周瑜":
            case "業炎周瑜★":
            case "絕舞貂蟬":
            case "絕舞貂蟬★":
                $book4a.html(red);
                $book4b.html(purple); break;
            case "振威張遼":
            case "振威張遼★":
            case "一騎關羽":
            case "鬼神呂布":
            case "鬼神呂布★":
                $book4a.html(blue);
                $book4b.html(green); break;
            case "狼顧司馬懿":
            case "狼顧司馬懿★":
            case "文帝曹丕":
                $book5a.html(purple);
                $book5b.html(green); break;
        }
        
        //arm
        var $arm = $(this).closest(".wujiangself").next().find(".arm");
        var $arm1 = $(this).closest(".wujiangself").next().find(".arm1");
        var $arm2 = $(this).closest(".wujiangself").next().find(".arm2");
        $arm2.remove();
        switch(wujiang){
            case "昭烈劉備":
            case "昭烈劉備★":
            case "仁德劉備":$arm1.html("雌雄雙股劍").attr("type","劍");break;
            case "武聖關羽":
            case "武聖關羽★":$arm1.html("青龍偃月刀").attr("type","刀");break;
            case "暴怒張飛":
            case "桓侯張飛":$arm1.html("丈八蛇矛").attr("type","槍");break;
            case "龍膽趙雲":
            case "龍膽趙雲★":$arm1.html("青釭劍").attr("type","劍");break;
            case "臥龍諸葛亮":
            case "臥龍諸葛亮":
            case "臥龍諸葛亮★":
            case "臥龍諸葛亮★":
            case "七星諸葛亮":$arm1.html("諸葛連弩").attr("type","弓");
                            $arm.append($("<option/>").html("朱雀羽扇").attr("type","扇").addClass("arm2"));break;
            case "錦獅馬超":$arm1.html("龍騎槍").attr("type","槍");break;
            case "弓神黃忠":
            case "弓神黃忠★":
            case "討虜黃忠":$arm1.html("黃楊大弓").attr("type","弓");break;
            case "麒麟姜維":
            case "麒麟姜維★":
            case "斗膽姜維":$arm1.html("若麒麟牙").attr("type","槍");break;
            case "弓腰姬孫尚香":
            case "弓腰姬孫尚香★":$arm1.html("鵲畫弓").attr("type","弓");break;
            case "阿醜黃月英":
            case "傑女黃月英":
            case "傑女黃月英★":$arm1.html("諸葛連弩").attr("type","弓");break;
            case "鳳雛龐統":
            case "智極龐統":$arm1.html("驚凰弓").attr("type","弓");break;
            case "先鋒廖化":
            case "忠烈廖化":$arm1.html("三尖兩刃刀").attr("type","刀");break;
            case "驍勇魏延":
            case "狂骨魏延":$arm1.html("鬼魘刀").attr("type","刀");break;
            case "武帝曹操":
            case "武帝曹操":
            case "武帝曹操★":
            case "武帝曹操★":
            case "奸雄曹操":$arm1.html("倚天劍").attr("type","劍");
                            $arm.append($("<option/>").html("青釭劍").attr("type","劍").addClass("arm2"));break;
            case "獨目夏侯惇":
            case "獨目夏侯惇★":
            case "蒼狼夏侯惇":$arm1.html("破軍斬").attr("type","刀");break;
            case "振威張遼":
            case "振威張遼★":$arm1.html("滄月").attr("type","槍");break;
            case "一騎關羽":$arm1.html("青龍偃月刀").attr("type","刀");break;
            case "狼顧司馬懿":
            case "狼顧司馬懿★":
            case "宣王司馬懿":$arm1.html("窮奇羽扇").attr("type","扇");break;
            case "洛神甄姬":$arm1.html("月下美人").attr("type","扇");break;
            case "毒士賈詡":
            case "毒士賈詡★":
            case "亂武賈詡":
            case "亂武賈詡★":$arm1.html("窮奇羽扇").attr("type","扇");break;
            case "疾風曹仁":
            case "疾風曹仁★":
            case "征南曹仁":$arm1.html("摧城槍").attr("type","槍");break;
            case "驅虎荀彧":
            case "令香荀彧":$arm1.html("弱水劍").attr("type","劍");break;
            case "文帝曹丕":
            case "滅奏曹丕":$arm1.html("龍鱗劍").attr("type","劍");break;
            case "惡來典韋":
            case "英靈典韋":$arm1.html("蚩尤重戟").attr("type","槍");break;
            case "武烈孫堅":
            case "武烈孫堅★":
            case "猛虎孫堅":$arm1.html("古錠刀").attr("type","刀");break;
            case "霸王孫策":
            case "霸王孫策★":
            case "馳騁孫策":$arm1.html("霸王槍").attr("type","槍");break;
            case "吳王孫權":
            case "吳王孫權★":
            case "若虎孫權":$arm1.html("白虎銀槍").attr("type","槍");break;
            case "業炎周瑜":
            case "業炎周瑜★":
            case "顧曲周瑜":$arm1.html("龍吟弓").attr("type","弓");break;
            case "矢志太史慈":
            case "矢志太史慈★":
            case "感古太史慈":$arm1.html("虎撲弓").attr("type","弓");break;
            case "焚天陸遜":
            case "儒將陸遜":
            case "儒將陸遜★":$arm1.html("龍吟弓").attr("type","弓");break;
            case "郡主孫尚香":$arm1.html("鵲畫弓").attr("type","弓");break;
            case "克己呂蒙":
            case "虎威呂蒙":$arm1.html("虎撲弓").attr("type","弓");break;
            case "國士凌統":
            case "浴血凌統":
            case "浴血凌統★":$arm1.html("燕回閃").attr("type","劍");break;
            case "遊俠甘寧":
            case "遊俠甘寧":
            case "鬥將甘寧":$arm1.html("霸海刀").attr("type","刀");
                            $arm.append($("<option/>").html("千浪破").attr("type","弓").addClass("arm2"));break;
            case "締盟魯肅":$arm1.html("玄武折扇").attr("type","扇");break;
            case "忠魂魯肅":
            case "鬼神呂布":
            case "鬼神呂布":
            case "鬼神呂布★":
            case "鬼神呂布★":
            case "修羅呂布":$arm1.html("方天畫戟").attr("type","槍");
                            $arm.append($("<option/>").html("龍舌弓").attr("type","弓").addClass("arm2"));break;
            case "猩紅呂姬":
            case "猩紅呂姬★":
            case "雙子呂姬":
            case "雙子呂姬★":$arm1.html("龍舌弓").attr("type","弓");break;
            case "戰姬呂玲綺":
            case "雙子呂玲綺":
            case "雙子呂玲綺★":$arm1.html("方天畫戟").attr("type","槍");break;
            case "召虎張遼":
            case "召虎張遼★":$arm1.html("滄月").attr("type","槍");break;
            case "魔君董卓":
            case "魔君董卓★":
            case "濁世董卓":$arm1.html("七星刀").attr("type","刀");break;
            case "絕舞貂蟬":
            case "絕舞貂蟬★":
            case "傾世貂蟬":
            case "傾世貂蟬★":
            case "靈蛇甄姬":$arm1.html("月下美人").attr("type","扇");break;
            case "神威趙雲":$arm1.html("青釭劍").attr("type","劍");break;
            case "鐵騎馬超":
            case "鐵騎馬超★":$arm1.html("龍騎槍").attr("type","槍");break;
            case "天公張角":
            case "符咒張角":$arm1.html("黃天之弓").attr("type","弓");break;
            case "鴉殺顏良":$arm1.html("魍魎").attr("type","槍");break;
            case "獵狐文醜":$arm1.html("魑魅").attr("type","槍");break;
            case "思召袁紹":$arm1.html("思召劍").attr("type","劍");break;
        }
    })
    
    //tabs
    $(".battleself").find(".wujianglist").change(function(){
        
        var wujiang = $(this).find(':selected').val();
        var tabsid = $(this).closest(".tabscontent").attr("id");
        var $tabsheader = $(this).closest("#tabs").find('a[href="#'+tabsid+'"]');
        
        if(wujiang.length>2){
            $tabsheader.html(wujiang);
        }
        else{
            $tabsheader.html("武將");
        }
        
    })
   
    //maxgf
    $("#gfmax").click(function(){
        $("#gfcp").val(10152);
    })
    
    //maxbase
    $(".basemax").click(function(){
        $(this).closest(".wujiangin").find(".baselevel").val(120);
    })
    
    //maxtech
    $("#techmax").click(function(){
        $("#qiangwu").val(60);
        $("#qiangzhi").val(40);
        $("#qiangbing").val(80);
        $("#gongwu").val(60);
        $("#gongzhi").val(80);
        $("#gongbing").val(40);
        $("#qiwu").val(80);
        $("#qizhi").val(40);
        $("#qibing").val(60);
    })
    
    //maxsoul
    $(".soulmax").click(function(){
        $(this).closest(".wujiangin").find(".soullevel").val(30);
    })
    
    //maxstone
    $(".stonemax").click(function(){
        $(this).closest(".wujiangin").find(".stonelevel").val(9);
        $(this).closest(".wujiangin").find(".stonestar").val(3);
    })
    
    //maxbtype
    $(".btypemax").click(function(){
        $(this).closest(".wujiangin").find(".booklevel").val(5);
        $(this).closest(".wujiangin").find(".book1a").prop('selected',true);
        $(this).closest(".wujiangin").find(".book2a").prop('selected',true);
        $(this).closest(".wujiangin").find(".book3a").prop('selected',true);
        $(this).closest(".wujiangin").find(".book4a").prop('selected',true);
        $(this).closest(".wujiangin").find(".book5a").prop('selected',true);
        $(this).closest(".wujiangin").find(".btypelevel3a").prop('selected',true);
    })
    
    //maxarm
    $(".armmax").click(function(){
        $(this).closest(".armtable").find(".armclass").val("絕");
        var $armlist = $(this).closest(".armtable").find(".arm");
        if($armlist.find(":selected").val()==="無"||$armlist.find(":selected").val()==="專屬"){
            $armlist.find(".arm1").prop('selected',true);
        }
        $(this).closest(".armtable").find(".armlevel").val(15);
        $(this).closest(".armtable").find(".armbd1").val(15);
        $(this).closest(".armtable").find(".armbd2").val(8);
        var armtype = $(this).closest(".armtable").find(".arm :selected").attr("type");
        switch(armtype){
            case "劍":
            case "弓":$(this).closest(".armtable").find(".armbasewu").val(133);
                        $(this).closest(".armtable").find(".armbasezhi").val(133);
                        $(this).closest(".armtable").find(".armbasebing").val(133);break;
            case "刀":$(this).closest(".armtable").find(".armbasewu").val(133);
                        $(this).closest(".armtable").find(".armbasezhi").val(106);
                        $(this).closest(".armtable").find(".armbasebing").val(160);break;
            case "槍":$(this).closest(".armtable").find(".armbasewu").val(160);
                        $(this).closest(".armtable").find(".armbasezhi").val(106);
                        $(this).closest(".armtable").find(".armbasebing").val(133);break;
            case "扇":$(this).closest(".armtable").find(".armbasewu").val(133);
                        $(this).closest(".armtable").find(".armbasezhi").val(160);
                        $(this).closest(".armtable").find(".armbasebing").val(106);break;
        }
        $(this).closest(".armtable").find(".armsltype").val("兵力提升");
        $(this).closest(".armtable").find(".armsl").val("100").next().show();
    })
    
    //book
    $(this).find(".book").change(function(){
        if($(this).find(":selected").val()==="無"){
            $(this).next().val("");
        }
        else{
            if(!$(this).next().val()){
                $(this).next().val("1");
            }
        }
    })
    
    //arm
    $(".arm").change(function(){
        if($(this).find(":selected").val()==="無"){
            $(this).closest(".armtable").find("input").val("");
            $(this).closest(".armtable").find("select").val("無");
        }
        else{
            $(this).closest(".armtable").find(".armbase").each(function(){
                if(!$(this).val()){
                    $(this).val(80);
                }
            })
            $(this).closest(".armtable").find(".armbd").each(function(){
                if(!$(this).val()){
                    $(this).val(1);
                }
            })
            if(!$(this).closest(".armtable").find(".armlevel").val()){
                $(this).closest(".armtable").find(".armlevel").val(0);
            }
        }
    })
    
    //armsl
    $(".armsltype").change(function() {
        if($(this).val()==="武力提升"||$(this).val()==="智力提升"||$(this).val()==="兵力提升") {
            $(this).siblings(".armsl").next().show();
        }
        else {
            $(this).siblings(".armsl").next().hide();
        }
    })
    
    //popup
    var cursor = 280;
    $fol = $(".battleself").find(".fol");
    $arm = $(".battleself").find(".arm");
    $btype = $(".wujiangself").find(".btype");
    
    $fol.hover(function(){
        if($(this).closest(".wujiangout").siblings(".folpopup").prop("show")){
            $(this).closest(".wujiangout").siblings(".folpopup").show();
        }
    }, function(){
        $(this).closest(".wujiangout").siblings(".folpopup").hide();
    })
    $fol.mousemove(function(event){
        $(this).closest(".wujiangout").siblings(".folpopup").css('top',event.pageY-cursor).css('left',event.pageX);
    })
    
    $arm.hover(function(){
        if($(this).closest(".wujiangout").siblings(".armpopup").prop("show")){
            $(this).closest(".wujiangout").siblings(".armpopup").show();
        }
    }, function(){
        $(this).closest(".wujiangout").siblings(".armpopup").hide();
    })
    $arm.mousemove(function(event){
        $(this).closest(".wujiangout").siblings(".armpopup").css('top',event.pageY-cursor).css('left',event.pageX);
    })
    
    $btype.hover(function(){
        if($(this).closest(".wujiangout").siblings(".btypepopup").prop("show")){
            $(this).closest(".wujiangout").siblings(".btypepopup").show();
        }
    }, function(){
        $(this).closest(".wujiangout").siblings(".btypepopup").hide();
    })
    $btype.mousemove(function(event){
        $(this).closest(".wujiangout").siblings(".btypepopup").css('top',event.pageY-cursor).css('left',event.pageX);
    })
    
    //report dialog
    $("#reportbutton").click(function(){
        $("#reportdialog").show().dialog({
            width: 400,
            buttons: {
                "提交": function(){
                    var jqxhr = $.ajax({
                        url: "https://script.google.com/macros/s/AKfycbwTl14tYATymfoXY9gXleK_3aP69gEdgGM7qo-q0zdXvgfqNDU/exec",
                        method: "GET",
                        dataType: "json",
                        data: $("#reportform").serializeObject()
                    }).success();
                    $(this).dialog("close");
                    $("#reportform")[0].reset();
                    $("#reportsuccess").show().dialog();
                }
            }
        });
    })
    
    //reset button
    $("#resetbutton").click(function(){
        location.reload();
    })
    
    //help dialog
    $("#helpbutton").click(function(){
        $("#helpdialog").show().dialog({
            width: 400
        });
    })
    
})
