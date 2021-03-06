$(document).ready(function(){
    //VARIABLES
    let nav = document.getElementById('nav');
    let menu = document.getElementById('enlaces');
    let open = document.getElementById('open');
    let hab = document.getElementsByClassName('hab');
    let close = true;
    let git = document.getElementById('iGit');
    let email = document.getElementById('iEmail');
    let correo = 'mailto:nelson.macias99@gmail.com';

    function menus(){
        let dist = window.pageYOffset;

        if(dist <= 400){
            nav.classList.remove('nav2');
            nav.className = 'nav1';
            nav.style.transition = '1s';
            open.style.color = '#fff';
        }else{
            nav.classList.remove('nav1');
            nav.className = 'nav2';
            open.style.color = "#000";
        }
    }

    function opener(){
        if(close == true){
            menu.style.width = '100%';
            close = false;
        }else{
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            close = true;
        }
    }

    window.addEventListener('load', function(){
        $('#onload').fadeOut();
        $('body').removeClass('hidden');
        menus();
    });

    window.addEventListener('scroll', function(){
        // console.log(this.window.pageYOffset);
        menus();
    });

    window.addEventListener('resize', function(){
        if(screen.width >= 800){
            close = true;
            menu.style.removeProperty('overflow');
            menu.style.removeProperty('width');
        }
    });

    window.addEventListener('click', function(e){
        if(close == false){
            let span = document.getElementById('icon');
            if(e.target != span && e.target != open){
                menu.style.width = '0%';
                menu.style.overflow = 'hidden';
                close = true;
            }
        }
    });

    for(let i = 0; i < hab.length; i++){
        if(screen.width >= 800){
            hab[i].addEventListener('mouseover', function(){
                let skill = document.getElementById(`hab${i+1}`);
                skill.classList.remove('hide');
            });

            hab[i].addEventListener('mouseout', function(){
                let skill = document.getElementById(`hab${i+1}`);
                skill.classList.add('hide');
            });
        }

        else{
            hab[i].addEventListener('click', function(){
                let skill = document.getElementById(`hab${i+1}`);
                skill.classList.toggle('hide');
            });
        }
    }

    open.addEventListener('click', function(){
        opener();
    });

    git.addEventListener('click', function(){
        window.open('https://github.com/NelsonAMR');
    })

    email.addEventListener('click', function(){
        window.open(correo, 'emailWindow');
    });
});