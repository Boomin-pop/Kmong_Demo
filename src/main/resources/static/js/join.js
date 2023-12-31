// let isIdChk = $("#isIdChk").val();
// let isPwChk = $("#isPwChk").val();
// let isRePwChk = $("#isRePwChk").val();
// let isNameChk = $("#isNameChk").val();
// let isNicknameChk = $("#isNicknameChk").val();
// let isEmailChk = $("#isEmailChk").val();
// let isTelChk = $("#isTelChk").val();
// let isJobNameChk = $("#isJobNameChk").val();

let isIdChk = false;
let isPwChk = false;
let isRePwChk = false;
let isNameChk = false;
let isNicknameChk = false;
let isEmailChk = false;
let isTelChk = false;
let isJobNameChk = false;

function submitChk(){
    console.log("isIdChk : " + isIdChk);
    console.log("isPwChk : " + isPwChk);
    console.log("isRePwChk : " + isRePwChk);
    console.log("isNameChk : " + isNameChk);
    console.log("isNicknameChk : " + isNicknameChk);
    console.log("isEmailChk : " + isEmailChk);
    console.log("isTelChk : " + isTelChk);
    console.log("isJobNameChk : " + isJobNameChk);


    // if(isIdChk == "no"){
    if(!isIdChk){
        alert("아이디를 입력해주세요!!");
        $("#userId").select();
        return false;
    }

    // if(isPwChk == "no"){
    if(!isPwChk){
        alert("비밀번호를 입력해주세요!!");
        $("#password").select();
        return false;
    }else{
    }

    if(!isRePwChk){
        alert("비밀번호를 한번 더 입력해주세요!!");
        $("#repassword").select();
        return false;
    }

    if(!isNameChk){
        alert("이름을 입력해주세요!!");
        $("#name").select();
        return false;
    }

    if(!isNicknameChk){
        alert("별명 중복체크를 확인해주세요!!");
        $("#nickname").select();
        return false;
    }

    if(!isEmailChk){
        alert("이메일 인증 확인을 해주세요!!");
        $("#email").select();
        return false;
    }

    if(!isTelChk){
        alert("전화번호를 입력해주세요!!");
        $("#tel").select();
        return false;
    }

    if(!isJobNameChk){
        alert("직업을 입력해주세요!!");
        $("#JobName").select();
        return false;
    }
    alert("회원가입이 완료 되었습니다.")
}

// 아이디 길이 체크
function idCheck(){

    var userId = $("#userId").val();
    console.log("######## : " + userId);

    if(userId.length<3){
        $("#chkMsg").html("아이디 길이는 3자리 이상이어야 합니다.");
        $("#chkMsg").css({"color":"red", "font-size":"13px"});
        isIdChk = false;
        checkClear();
        submitBtn.disabled=true;
        return;
    }
    if(userId == null){
        $("#chkMsg").html("");
        isIdChk = false;
        checkClear();
        submitBtn.disabled=true;
        return;
    }

    $.ajax({
        url:'/user/idCheck',
        type: "post",
        data:{"userId":userId}, // 서버에 전송할 데이터
        success: function(responseData){
            // responseData = "yes" or "no", yes:사용가능 no:사용불가

            if(responseData == "yes"){
                $("#chkMsg").html("사용가능한 아이디 입니다!!");
                $("#chkMsg").css({"color":"blue", "font-size":"13px"});
                // $("#isIdChk").val("yes");
                isIdChk = true;
            }else{
                $("#chkMsg").html("사용할 수 없는 아이디 입니다!!");
                $("#chkMsg").css({"color":"red", "font-size":"13px"});
                isIdChk = false;
                checkClear();
                submitBtn.disabled=true;
            }

        },
        error : function(){
            $("#chkMsg").html("서버 에러 입니다!!!");
//                    $("#chkModal").modal("show");
        }
    });
}

// 비밀번호 길이 체크

function pwCheck(){
    var userPassword = $("#password").val();

    if(userPassword.length<6){
        $("#chkMsg2").html("비밀번호는 6자리 이상이어야 합니다.");
        $("#chkMsg2").css({"color":"red", "font-size":"13px"});
        isRePwChk = false;
        checkClear();
        submitBtn.disabled=true;
        return;
    }else{
        $("#chkMsg2").html("사용가능한 비밀번호 입니다!!");
        $("#chkMsg2").css({"color":"blue", "font-size":"13px"});
        // $("#isPwChk").val("yes");
        isPwChk = true;
        return;
    }
}

// 비밀번호 확인
function rePwCheck(){
    var userPassword = $("#password").val();
    var repassword = $("#repassword").val();

    if(userPassword != repassword){
        $("#chkMsg3").html("비밀번호를 확인해주세요.");
        $("#chkMsg3").css({"color":"red", "font-size":"13px"});
        isRePwChk = false;
        checkClear();
        submitBtn.disabled=true;
        return;
    }else{
        $("#chkMsg3").html("비밀번호가 일치합니다!!");
        $("#chkMsg3").css({"color":"blue", "font-size":"13px"});
        // $("#isRePwChk").val("yes");
        isRePwChk = true;
        return;
    }
}

//이름 확인
function nameCheck(){
    var userName = $("#name").val();

    if(userName != "" && userName != null){
        isNameChk = true;
        return;
    }else{
        isNameChk = false;
        checkClear();
        submitBtn.disabled=true;
        return;
    }
}
// 별명 확인
function nicknameCheck(){
    var userNickname = $("#nickname").val();
    console.log("######## : " + userNickname);
    $.ajax({
        url:'/user/nicknameCheck',
        type: "post",
        data:{"userNickname":userNickname}, // 서버에 전송할 데이터
        success: function(responseData){
            // responseData = "yes" or "no", yes:사용가능 no:사용불가

            if(responseData == "yes"){
                $("#chkMsg4").html("사용가능한 별명 입니다!!");
                $("#chkMsg4").css({"color":"blue", "font-size":"13px"});
                // $("#isNicknameChk").val("yes");
                isNicknameChk = true;
            }else{
                $("#chkMsg4").html("사용할 수 없는 별명 입니다!!");
                $("#chkMsg4").css({"color":"red", "font-size":"13px"});
                isNicknameChk = false;
                checkClear();
                submitBtn.disabled=true;
            }

        },
        error : function(){
            $("#chkMsg4").html("서버 에러 입니다!!!");
        }
    });
}

let serverUUID = "";
isEmailChk = false;
function emailCheck(){
    let userEmail = $("#email").val();

    $.ajax({
        url:'/user/userEmailCheck',
        type: "get",
        data: {"userEmail":userEmail},
        success: function(uuid){
            if(uuid != "fail"){
                serverUUID = uuid;
                console.log("이메일 인증코드 : " + uuid);
                $("#confirmEmail").html('<div class="col-md-8">'
                    +'<input class="form-control mb-2" type="text" id="confirmUUID"/></div>'
                    +'<div class="col-md-4">'
                    +'<input type="button" onclick="emailConfirm()" class="checkEmail" value="인증코드확인"></div>'
                );
            }else{
                alert("이메일을 다시 확인하세요!!");
                $("#email").select();
            }
        },
        error:function(){
            alert("인증 실패!!");
        }
    });
}

function emailConfirm(){
    let confirmUUID = $("#confirmUUID").val();

    if(confirmUUID == null || confirmUUID ==""){
        alert("인증 코드 확인하세요!!!");
        $("#confirmUUID").select();
    }else if(serverUUID == confirmUUID){
        alert("인증 성공!!");
        isEmailChk = true;
        // $("#isEmailChk").val("yes");
    }else{
        alert("인증코드를 다시 확인하세요!!");
        $("#confirmUUID").select();
        return;

    }
}

//전화번호 확인

var autoHypenPhone = function(str){
    str = str.replace(/[^0-9]/g, '');
    var tmp = '';
    if( str.length < 4){
        return str;
    }else if(str.length < 7){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    }else if(str.length < 11){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    }else{
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }

    return str;
}




tel.onkeyup = function(){
    var userTel = $("#tel").val();

    this.value = autoHypenPhone( this.value ) ;
    // if(userTel == "" || tel == null){
    if(userTel == "" || userTel == null){
        // $("#isTelChk").val("no");
        isTelChk = false;
        checkClear();
        submitBtn.disabled=true;
        return;
    }else{
        isTelChk = true;
        return;
    }
}

//직업 확인
function jobNameCheck(){
    var userJobId = $("#jobName").val();

    if(userJobId != "" && userJobId != null){
        isJobNameChk = true;
        return;
    }else{
        isJobNameChk = false;
        checkClear();
        submitBtn.disabled=true;
        return;
    }

}

// 약관동의
function checkClear(){
    if(document.getElementById("chkall").checked){
        document.getElementById("chkall").checked=false;
        document.getElementById("age").checked=false;
        document.getElementById("termsOfService").checked=false;
        document.getElementById("privacyPolicy").checked=false;
        document.getElementById("allowPromotions").checked=false;
    }
}


let submitBtn = document.getElementById("joinclear");
// 테이블의 모든 행을 선택/해제하는 메소드
function checkAll(){
    // chkall input이 체크가되면 true, 그렇지않으면 false 리턴
    let isChecked = document.getElementById("chkall").checked;
    console.log(isChecked);
    let chks = document.getElementsByName('chk');

    for(let i=0; i<chks.length; i++){
        chks[i].checked = isChecked;
    }
    checkRequiredChoice();
}

function checkRequiredChoice(){
    let ageChk = document.getElementById("age").checked;
    let svcChk = document.getElementById("termsOfService").checked;
    let privacyChk = document.getElementById("privacyPolicy").checked;

    console.log(submitBtn.disabled);

    if(ageChk && svcChk && privacyChk && isIdChk && isPwChk && isRePwChk && isNameChk && isNicknameChk && isEmailChk && isTelChk && isJobNameChk){
        submitBtn.disabled=false;
    }else{
        submitBtn.disabled=true;
    }
    console.log(ageChk);
    console.log(svcChk);
    console.log(privacyChk);
}


