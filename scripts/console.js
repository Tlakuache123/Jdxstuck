const prefijo = "<span style='color:green;'>DT: </span>"
const words = [
    'Bienvenidx a "Consola para escribir cartas vergas"<br>Oprime [&gt;] para ir delante del texto<br>Oprime [&lt;] para ir atras del texto<br><br>Tip: Si los presionas antes de que acabe la animacion del texto, acelaras la aparicion del mismo',
    'Hola Jade bb :3 <br> Creo que me siento mas comodo escribiendo en esto xd aqui si me surgen todas las ideas',
    'FELIZ CUMPLEAÑOS POR 29339123123 VEZ <br>Me alegra que este muy contentx por tus paquetes :B se ven genialeeeees (0w0 debo ir a robar ese OnePiece cap 1000)',
    'Que tal te parecio el regalo? Espero que te guste mucho :0 llevo su tiempo >:D pero nada que 2000 videos de youtube y codigo no puedan ayudarme para expresar el amor que te tengo',
    'BUENO YA CONCENTRATE CLAUDIO AAAAAAAH',
    'Feliz cumpleaños bb:<br>(Cuidado con mi ORTOgrafia)Elegí hacerte un homestuck por que siento que es algo muy importante de nuestra amistad u.u ,digo nos unen muchas cosas :B pero siento que homestuck fue un antes y un despues\
    asi que B) ahi estan tu version (obviamente original y sin ningun sprite robado), unx genial, bonitx y fuerte magx de la mente que usa su poderosa katana para morder a sus presas >:D',
    'Tal vez el mundo esta en medio del apocalipsis pero espero que te la pases muy bien &lt;3 <br>\
    COMAS MUCHO, JUEGUES MUCHO Y SEAS MUY FELIZ &lt;3',
    'Tu me hiciste saber lo que una amistad significa de verdad :3, lo siento si luego no expreso el cariño que te tengo pero es que es MUCHISIMO y aparte xd ya ves que estoy medio atrofiado para expresar mis sentimientos',
    'Muchas veces pienso en ti, que estariamos haciendo ahora si la pandemia no hubiera exisitido? estariamos igual? hubieramos muerto por intoxicacion de sushi caducado? Cuantos juegos nos habriamos\
    pasado juntos? Muchas cosas pasan por mi cabeza al preguntarme eso pero estoy seguro que te extraño y desearia volver a verte pronto @.@',
    'Las primeras veces que nos pusimos a ver Jujutsu Kaisen o jugamos LOL o vimos un flash de HS me ponia asi =&gt .__.<br>Pero internamente era "AAAAAAAAAAAH", muchas emociones se me juntaban y era como que me sobrecargaba xd\
    porque pues me encanta pasar tiempo contigo y queria expresarlo pero se me lagueaba la mollera jeje',
    'Aveces no digo nada porque no quiero empalagarte (creo lo escribi bien) xd<br><br>Pero creeme que cada fibra de mi ser le gusta estar contigo uwu',
    '<br>...Eres muy fuerte Jade <br>...Eres un buen ser humano<br>...Eres muy graciosx<br>...Eres muy hermosx<br>...Eres justx<br>...Eres sincerx<br>...Eres calidx<br>...AAAAAAAH eres un chingo de cosas buenas<br><span style="color:red;">~ERROR:EXCESO DE COSAS BUENAS</span>',
    'Eres mi mejor amigx y cuentas conmigo para todo &gt;:)<br>...no quiero sonar :0 empalagoso pero te quiero mucho y si alguien quiere pasarse contigo o se le ocurre tratar de apagar tu brillo >:D aqui estoy para putear gente y para protegerte<br>',
    'Bueno es hora de terminar esta carta que sino se me van a secar los ojos jeje',
    'Te amo mucho ok, eres muy especial para mi y hoy es tu dia especial :B ASI QUE NADA DE DEPRIMIRSE CORAZON >:D, despues de la tormenta viene el arcoiris...Y DESPUES DE ESTA MALDITA TORMENTA LLEGARA EL MEJOR PERRO MALDITO DESGRACIADO HIJO DE LA VERGA ARCOIRIS JAMAS ANTES VISTO asi que jamas te rindas \
    y cuando quieras hacerlo me dices uwu para sakar mis chistes malos<br><br>Gracias por existir y por seguir existiendo, te quiero ver feliz :") porque verte feliz me pone a mi feliz y gracias por todos los buenos momentos que he pasado contigo, cada uno los guardo con mucho amor<br><br>\
    Y TODAVIA TENEMOS MUCHAS COSAS POR HACER, PREPARA TU KATANA MAGICA QUE EL GOD-TIER NO SE LOGRARA SOLO Y ESE POLLITO KFC NO SE COMERA DE LA NADA >:D<br><br>\
    No te mereces el cielo, el cielo te merece a ti :") te amo mucho bb felices 2X años y ahora como superare esto pal proximo año? jsjsjsjsjs &lt;3<br><br>Atte: Tlakuache',
    'Dejare esto por aqui porque me recuerda mucho a ti corazon &lt;3 :<br><br>https://youtu.be/QKfP9N28buk<br><br><br><br><br><br>Gracias por tu amistad mi Terezy/Roxy',
    'FIN &lt;3'
]
let back = document.getElementById("back")
let next = document.getElementById("next")
let index = 0;

back.addEventListener("click",BackText)
next.addEventListener("click",NextText)

let cursor = gsap.to('.cursor',{repeat:-1, opacity:0, ease:"power2.inOut"})


let tl = gsap.timeline()
tl.to(".text",{duration:5, text:words[index]})

function NextText(){
    if(tl.isActive()){
        tl.progress(1)
    }else{
        if(index + 1 < words.length){
            tl.to(".text",{duration:0.5, text:""})
            index += 1
            tl.to(".text",{duration:1, text:prefijo + words[index]})
        }
    }
}

function BackText(){
    if(tl.isActive()){
        tl.progress(1)
    }else{
        if(index - 1 >= 0){
            tl.to(".text",{duration:0.5, text:""})
            index -= 1
            if(index != 0){
                tl.to(".text",{duration:1, text:prefijo + words[index]})
            }else{
                tl.to(".text",{duration:1,text:words[index]})
            }
        }
    }
}
