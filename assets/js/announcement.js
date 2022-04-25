// To let admin to manage announcement and display it to residents

var announcements=[
{
    announcementId:1,
    title:"My First Announcement has long title",
    content:`My first Content
    With Hello Line Break
    and 3rd line`,
    image:"",
    target:['Block A','Block B','Block C','Block D'],
    time: '24 Apr 2022, 6:23 am'
},
{
    announcementId:2,
    title:"Changing Our Admin",
    content:`Changing Our Admin to Mr Suddenly
    phone: 0136247251`,
    image:"assets/images/profile-image.png",
    target:['Block B','Block D'],
    time:'25 Apr 2022, 5:23 am'
},
{
    announcementId:3,
    title:"My Second Announcement",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla. Magnam, tenetur quae nemo nobis cumque, corrupti dolores totam qui consequatur iusto quibusdam? Neque, ratione eius, sit officiis laborum sequi repudiandae mollitia blanditiis inventore maiores est ullam quasi deleniti itaque modi, aspernatur pariatur hic! Perferendis quaerat exercitationem incidunt. Reprehenderit, dolor!",
    image:"https://cdn.pixabay.com/photo/2015/12/07/10/56/architect-1080589_1280.jpg",
    target:['Block A'],
    time:'25 Apr 2022, 5:23 am'
},
{
    announcementId:4,
    title:"Another Announcement",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla. Magnam, tenetur quae nemo nobis cumque, corrupti dolores totam qui consequatur iusto quibusdam? Neque, ratione eius, sit officiis laborum sequi repudiandae mollitia blanditiis inventore maiores est ullam quasi deleniti itaque modi, aspernatur pariatur hic! Perferendis quaerat exercitationem incidunt. Reprehenderit, dolor!",
    image:"assets/images/redident.png",
    target:['Block A','Block B','Block C','Block D'],
    time:'25 Apr 2022, 5:23 am'
},
    
]

    $(document).ready(function(){
        displayAnnouncements()
    })

    function displayAnnouncements(){
        $('#announcement_container').empty()

        for (announcement of announcements.reverse()){
                var card = `<div class="card mt-4 mycontainer">
                        <div class="card-body">
                            ${getTag(announcement.target)}
                            <h5>${announcement.title}</h5>
                            <span class="text-muted ms-auto">${announcement.time}</span>
                            ${getImageElement(announcement.image)}
                            <p class="card-text" style="white-space: pre-line">${announcement.content}</p>
                        </div>
                        </div>`
                $('#announcement_container').append(card)
            }
        announcements.reverse()
    }

    function getTag(array){
        var htmlElement = ""
        for (index=0; index<array.length; index++){
            htmlElement+=getBlockColor(array[index])
        }
        return htmlElement;
    }

    function getBlockColor(input){
        switch(input){
            case 'Block A':
                return `<span class="badge rounded-pill bg-opacity-75 bg-success me-1">${input}</span>`
            case 'Block B':
                return `<span class="badge rounded-pill bg-opacity-75 bg-primary me-1">${input}</span>`
            case 'Block C':
                return `<span class="badge rounded-pill bg-opacity-75 bg-warning me-1">${input}</span>`
            case 'Block D':
                return `<span class="badge rounded-pill bg-opacity-75 bg-danger me-1">${input}</span>`
        }
    }

    function getImageElement(source){
        if(source!=""){
            return `<img src="${source}" alt="" class="w-100">`
        }else{
            return ""
        }
    }


    function submitAnnouncement(){

        let title = document.getElementById("title").value;
        let content = document.getElementById("content").value;
        
        if(title!=""){

            var announcement = {
                title: title,
                content: content,
                image:"",
                target:[],
                time: new Date().toLocaleDateString('en-uk', { year:"numeric", month:"short", day:"numeric",hour:"numeric", minute:"numeric", hour12: true})
            }
            announcements.push(announcement)
        }
        $('#title').val('')
        $('#content').val('')
        displayAnnouncements()
    }

    // Filter Function
    function filterBlock(block){
        
        $('#block-span').text(block)

        $('#announcement_container').empty()
        for (announcement of announcements.reverse()){
            var blocks = announcement.target
            if(blocks.includes(block)){
                var card = `<div class="card mt-4 mycontainer">
                        <div class="card-body">
                            ${getTag(announcement.target)}
                            <h5>${announcement.title}</h5>
                            <span class="text-muted ms-auto">${announcement.time}</span>
                            ${getImageElement(announcement.image)}
                            <p class="card-text" style="white-space: pre-line">${announcement.content}</p>
                        </div>
                        </div>`
                $('#announcement_container').append(card)
            }
        }
        announcements.reverse()
        toggleActive(block)
    }

    // toggle filter active
    function toggleActive (block) {
        var text = block.substring(block.length-1)
        let elem = document.getElementById(text);

        var currentActive = false

        if(elem.classList.contains('btn_mygreen')){
            currentActive = true
        }

        let Buttons = document.getElementsByClassName('blockButton');
        for(let button of Buttons) {
          button.classList.remove('btn_mygreen');
        }
        // toggle active
        if(currentActive){
            // then cancel filter
            displayAnnouncements()
            $('#block-span').text('All Blocks')
            elem.classList.remove('btn_mygreen');
          } else {
            elem.classList.add('btn_mygreen');
        }
    }
    

