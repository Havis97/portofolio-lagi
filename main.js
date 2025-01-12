function toggleDetail(e) {
    // !Target Toggle 
    const target = $(e.target)
    // *Kondisi toggle
    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    // !Parent Toggle
    const item = $(target).parents(".about-exp-item")
    // !children Toggle
    const detail = $(item).children(".about-exp-item-detail")
    // *Action
    $(detail).slideToggle()
}


// !Form upload
function onFormSubmit(e){
    // *tetap di form
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    //* alert kosong dan terisi
    if(!$(email).val()){
        alert("Email Dibutuhkan")
    }else if(!$(subject).val()){
        alert("Subject Dibutuhkan")
    }else if(!$(message).val()){
        alert("message Dibutuhkan")
    }else{
        $(email).val("")
        $(subject).val()
        $(message).val()
        alert("Form sudah dimasukan")
    }
}