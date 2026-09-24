/**
 * ==========================================================================
 * PREGUNTA.JS - LÓGICA DE INTERACCIÓN, NAVEGACIÓN Y FORMSPREE
 * ==========================================================================
 */

// Diccionario de textos largos (Placeholders listos para ser reemplazados)
// =========================================================================
// AQUÍ COLOCAS TUS TEXTOS CUANDO ESTÉS LISTO:
// Puedes escribir textos largos de varios párrafos usando las comillas ` `
// =========================================================================
const TEXTOS_REVELACION = {
    // Pantalla 5: Botón 1
    texto1: `Hi, my baby. Doy inicio con algo un poco corto, pero tal vez lo más importante.
Es loco que ya se haya cumplido un año y medio de que nos conocimos, de hecho, que loco que casi llegamos a los dos años. Hay algo que me parece alucinante, y es que desde que te conozco, jamás he sentido nada más fuerte que el amor que siento por ti. Lo que quiero decir es que, hasta el día de hoy he pasado por muchas emociones, pero la más fuerte siempre será la que sentí por ti.
Desde aquel primer momento en el que decidimos dar el paso a ser novios, todo cambió, ¿no?, hay momentos en los que me detengo y pienso lo mucho que ha cambiado todo, lo mucho que hemos cambiado los dos. Conocernos fue una de esas gratas coindidencias de la vida, fuiste el mejor regalo que me ha dado el mundo. Me hiciste dar cuenta de todo lo que puedo dar, de todo lo que puedo amar. Contigo conocí lo que es el amor incondicional, contigo conocí lo que es amar con el alma, no con el corazón. Mi alma te busca, te quiere, te quiere para siempre; y yo, Camila, yo también te quiero para siempre.
A veces, al sentir tanto te preocupa que si ocurre algo, mi alma se parta en tantos pedazos que tal vez sea imposible juntarlos otra vez, pero es el precio que estoy dispuesto a pagar con tal de amarte.
Te amé, te amo, y te amaré para siempre.`,

    // Pantalla 5: Botón 2
    texto2: `Recuerdo antes a un Reinaldo tan pero tan cabizbajo. Era una persona tan diferente, con una energía desgastada, con una vida desgastada, sin ningún indicio de que eso iba a cambiar, hasta que llegó una personita que lo cambió todo.
Nunca fui una persona de vicios, ni de ser mala persona, pero sí que era una persona que no hacía nada por sí mismo. «No podía creer lo que tenía delante de mí, ¿qué eras? ¿por qué eras tan perfecta? ¿por qué una persona como yo merecería algo como tú? ¿por qué me ama a mí?», esas eran solo unas de las preguntas que me hacía cada día. No vengo aquí a dar lástima, obviamente, pero esas mismas preguntas me hicieron darme cuenta a mí mismo que debía cambiar las cosas. Siempre pensé que era una persona con tantos problemas, y realmente soy una persona con tantas heridas, Camila, con muchos traumas y cosas que pensé que no iba a curar tan fácil pero, llegaste tú y fue algo completamente diferente. Recuerdo que, yo pensaba siempre que era una persona fastidiosa, pero llegaste tú y demostraste que esa intesidad era lo que amabas de mí; también pensaba que mi cuerpo era horrible, pero llegaste tú y demostraste que cada parte de mí era algo nuevo para amar. Entiendo que haya pasado el tiempo, y que tal vez aquello que sentiste en ese momento ha cambiado, pero jamás olvidaré ni por un segundo cómo en ese momento tan oscuro, me hiciste brillar.
Como dije antes, hemos cambiado mucho, nuestro amor se ha transformado mucho. No te miento con que a veces puedo sentir miedo de que, mientras más pase el tiempo, menos sientas por mí, pero, en el momento en el que escucho tu risa provocada por mí, cualquier atisbo de duda o miedo sale de mí. Te he extrañado mucho todo este tiempo, muchísimo. Tu voz me da vida, verte me revive, hacerte feliz es un motivo más que razonable para que despertar otro día sea emocionante. Te amo muchisimo, te amo más de lo que algún día sabrás. YO TE AMO MÁS YO GANOOOOOOOOOOOOOOO`,

    // Pantalla 5: Botón 3
    texto3: `Bueno, esto es una disculpa que quiero sacar de mi pecho. La última vez que hablamos, estoy seguro de que no fue agradable para ninguno de los dos, más porque es un tema sensible y recurrente para mí, y existen momentos en los que para mí es tan difícil entender cómo me siento, que hasta que no lo saco no me doy cuenta de lo errado que estaba.
La realidad es que, desde que tengo memoria he sufrido de una ansiedad, es una especie de trauma generacional que viene de mi abuela, pues ella siempre ha sido así (no es excusa). Acompañado de malas experiencias en mi vida, eso ha provocado que mi corazón sea sensible ante los cambios, lo que podemos conocer como una especie de ‘apego ansioso’. Por lo tanto, me es fácil imaginarme escenarios catastróficos, más porque anteriormente te he perdido y obvio me genera miedo que ocurra otra vez. Tal vez el problema no sea notar cambios, porque estoy seguro de que sí los hay, el problema es interpretar esos cambios como una señal de alerta, y no como algo natural. Mi objetivo es saber gestionar mejor esos momentos, saber gestionar mejor mis emociones y, de alguna manera siento que lo estoy haciendo, pues siento que mi cerebro está funcionando diferente ahora.
Lo único que te he pedido y siempre he querido es lo que ya has venido haciendo todo este tiempo: Que seas genuina y sincera conmigo en todo momento, que tu amor sea real y no algo que tengas que forzar únicamente porque yo soy una buena persona contigo. Quiero que cuando te levantes y me des los buenos días no sea por costumbre, sino que sea una señal que en letras pequeñas diga “Te elijo. Te amo”. Estoy aquí porque lo eliges, y porque me quieres aquí, y deseo que eso no cambie nunca. Lamento mis maneras de comunicar las cosas anteriormente, siempre has sido suficiente para mí, y por eso siempre he hecho tanto esfuerzo en que te quedes a mi lado, y justamente el miedo a que el esfuerzo no sea suficiente para ti es lo que me mataba de miedo. Jamás necesité que fueras diferente, me duele tanto haberte hecho pensar que debía ser así, porque te juro que no, de verdad que no. Te amo con el alma, Camila. Amo a la chica de pelo rizado, ojos marrones y brackets grises. Daría toda mi vida por ella. Daría todo lo que soy por ti, Camila. Te amo, y te amaré para siempre. Te amo.`,

    // Pantalla 6: Botón 1 ("Toca aquí, quiero agradecerte")
    texto4: `NO PENSÉ QUE LLEGARÍAS HASTA AQUI. Are we breaking up?`,

    // Pantalla 6: Botón 2 ("Toca aquí por si alguna vez regresas a esta página queriendo recordarme")
    texto5: `Hi, enanita. No sé si volviste para acá tiempo después, o si estás leyendo de una todo esto, pero, quiero que cierres los ojos y recuerdes mi voz: recuerda las veces en las que decía alguna estupidez solo para hacerte reir, o cuando te decía cuanto te amaba, desesperado de no entender  el sentimiento que estaba dentro de mí. Recuerda todas aquellas veces en las que de nada más verte sabía que eras el lugar donde quería estar. Recuerda las veces en las que cambiaste mi día, o en los que simplemente hablar conmigo ya te cambiaba todo. Recuerda todas aquellas veces en las que insistí tanto en verte, porque verte me emocionaba y me hacía feliz, o en las que llamarte me emocionaba tanto, me sentía en otro planeta cuando estaba contigo. Recuerda todas aquellas veces en las que reímos hasta llorar, en aquellas bromas que nos hacíamos entre nosotros. Recuerda lo mucho que amabamos ser parte de la vida del otro. Recuerda el amor incondicional que te tengo, algo que jamás cambiará. Te amo, te amaré para siempre, no importa cuando leas esto. Te amo.`
};

const CORREO_CONTACTO = "reinaldooo0301@gmail.com";

// Estado de la navegación
let currentScreenId = "screen-p1";
let previousScreenBeforeDetail = "screen-p5";

// Estado del temporizador de advertencia (15 segundos)
let warningTimer = null;
let warningSecondsLeft = 15;

/**
 * Transición fluida entre pantallas (SPA) y gestión de temas atmosféricos
 */
function goToScreen(targetScreenId) {
    const currentScreen = document.getElementById(currentScreenId);
    const targetScreen = document.getElementById(targetScreenId);

    if (!targetScreen) {
        console.error(`Pantalla destino "${targetScreenId}" no encontrada.`);
        return;
    }

    if (currentScreen) {
        currentScreen.classList.remove("active");
    }

    // Gestión dinámica de los temas en el body
    document.body.classList.remove("theme-hostile", "theme-warning", "theme-angelic");

    if (targetScreenId === "screen-p4" || targetScreenId === "screen-confirm-enamorada") {
        document.body.classList.add("theme-hostile");
    } else if (targetScreenId === "screen-warning") {
        document.body.classList.add("theme-warning");
        startWarningCountdown();
    } else if (targetScreenId === "screen-p6") {
        document.body.classList.add("theme-angelic");
    } else if (targetScreenId === "screen-detail") {
        if (previousScreenBeforeDetail === "screen-p6") {
            document.body.classList.add("theme-angelic");
        }
    }

    // Scroll suave hacia la parte superior
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Activar nueva pantalla
    targetScreen.classList.add("active");
    currentScreenId = targetScreenId;
}

/**
 * Control del temporizador de la pantalla de advertencia (15s bloqueados)
 */
function startWarningCountdown() {
    if (warningTimer) {
        clearInterval(warningTimer);
        warningTimer = null;
    }

    warningSecondsLeft = 15;
    const btnContinue = document.getElementById("btnWarningContinue");
    const btnContinueText = document.getElementById("btnWarningContinueText");
    const secondsPill = document.getElementById("warningSecondsPill");
    const progressFill = document.getElementById("warningProgressFill");

    if (btnContinue) {
        btnContinue.disabled = true;
        btnContinue.classList.remove("is-ready");
    }
    if (btnContinueText) {
        btnContinueText.textContent = "Continuar (15s)";
    }
    if (secondsPill) {
        secondsPill.textContent = "15s";
    }
    if (progressFill) {
        progressFill.style.width = "0%";
    }

    warningTimer = setInterval(() => {
        warningSecondsLeft--;

        if (secondsPill) {
            secondsPill.textContent = `${Math.max(warningSecondsLeft, 0)}s`;
        }
        if (btnContinueText) {
            btnContinueText.textContent = `Continuar (${Math.max(warningSecondsLeft, 0)}s)`;
        }
        if (progressFill) {
            const percent = ((15 - warningSecondsLeft) / 15) * 100;
            progressFill.style.width = `${Math.min(percent, 100)}%`;
        }

        if (warningSecondsLeft <= 0) {
            clearInterval(warningTimer);
            warningTimer = null;
            if (btnContinue) {
                btnContinue.disabled = false;
                btnContinue.classList.add("is-ready");
            }
            if (btnContinueText) {
                btnContinueText.textContent = "Continuar ✨";
            }
            if (secondsPill) {
                secondsPill.textContent = "Listo";
            }
        }
    }, 1000);
}

/**
 * Cancela la advertencia y regresa al inicio
 */
function cancelWarningAndGoHome() {
    if (warningTimer) {
        clearInterval(warningTimer);
        warningTimer = null;
    }
    goToScreen("screen-p1");
}

/**
 * Avanza hacia la pantalla final tras cumplir el tiempo de advertencia
 */
function proceedFromWarning() {
    if (warningSecondsLeft <= 0) {
        if (warningTimer) {
            clearInterval(warningTimer);
            warningTimer = null;
        }
        goToScreen("screen-p6");
    }
}

/**
 * Abre la vista de lectura con el texto seleccionado (Pantallas 5 y 6)
 */
function openDetail(key, title) {
    previousScreenBeforeDetail = currentScreenId;

    const readingTitle = document.getElementById("readingTitle");
    const readingBody = document.getElementById("readingBody");

    readingTitle.textContent = title;

    const textContent = TEXTOS_REVELACION[key] || "[TEXTO NO DISPONIBLE]";

    // Si es un placeholder, lo mostramos con estilo especial y claro
    if (textContent.startsWith("[TEXTO AQUÍ")) {
        readingBody.innerHTML = `
            <div class="reading-placeholder-box">
                <span class="reading-placeholder-tag">TEXTO RESERVADO</span>
                <p style="font-size: 1.25rem; font-weight: 600; color: #C2185B; margin: 15px 0;">
                    ${escapeHtml(textContent)}
                </p>
                <p class="reading-placeholder-notice">
                    (Aquí aparecerá el texto largo que me envíes para esta sección)
                </p>
            </div>
        `;
    } else {
        // Cuando contenga el texto definitivo
        readingBody.innerHTML = `
            <div class="reading-final-text" style="white-space: pre-line;">
                ${escapeHtml(textContent)}
            </div>
        `;
    }

    goToScreen("screen-detail");
}

/**
 * Abre el detalle de contacto en la Pantalla 6
 */
function openContactDetail() {
    previousScreenBeforeDetail = currentScreenId;

    const readingTitle = document.getElementById("readingTitle");
    const readingBody = document.getElementById("readingBody");

    readingTitle.textContent = "Aquí estaré para ti";

    readingBody.innerHTML = `
        <div class="contact-box">
            <p>Contáctame allí, estaré esperando tu mensaje.</p>
            
            <div class="email-pill-container">
                <a href="mailto:${CORREO_CONTACTO}" class="email-link">${CORREO_CONTACTO}</a>
                <button type="button" class="btn-copy-email" onclick="copyEmailToClipboard('${CORREO_CONTACTO}')">
                    Copiar correo 📋
                </button>
            </div>
            
            <p style="font-size: 0.9rem; color: #7A334B; margin-bottom: 0;">
                Puedes escribirme cuando lo sientas necesario, siempre responderé.
            </p>
        </div>
    `;

    goToScreen("screen-detail");
}

/**
 * Regresa desde la vista de lectura a la pantalla previa (P5 o P6)
 */
function closeDetail() {
    goToScreen(previousScreenBeforeDetail);
}

/**
 * Copia el correo electrónico al portapapeles y muestra confirmación
 */
function copyEmailToClipboard(email) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
            showToast("¡Correo copiado al portapapeles! 💌");
        }).catch(() => {
            fallbackCopy(email);
        });
    } else {
        fallbackCopy(email);
    }
}

function fallbackCopy(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
        document.execCommand("copy");
        showToast("¡Correo copiado al portapapeles! 💌");
    } catch (err) {
        showToast("Correo: " + text);
    }
    document.body.removeChild(tempInput);
}

/**
 * Mensaje toast flotante
 */
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
}

/**
 * Escapar HTML para evitar inyección
 */
function escapeHtml(text) {
    const div = document.createElement("div");
    div.innerText = text;
    return div.innerHTML;
}

/**
 * Inicialización al cargar la página
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Control del textarea y botón de Pantalla 2
    const loveInput = document.getElementById("loveGrowthInput");
    const btnSubmit = document.getElementById("btnSubmitGrowth");
    const growthForm = document.getElementById("growth-form");
    const feedback = document.getElementById("formFeedback");

    if (loveInput && btnSubmit) {
        loveInput.addEventListener("input", () => {
            const hasText = loveInput.value.trim().length > 0;
            btnSubmit.disabled = !hasText;
        });
    }

    // 2. Manejo asíncrono del formulario de Pantalla 2 (amor creciendo) a Formspree
    if (growthForm) {
        growthForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const textValue = loveInput.value.trim();
            if (!textValue) return;

            btnSubmit.disabled = true;
            const originalText = document.getElementById("btnSubmitText").textContent;
            document.getElementById("btnSubmitText").textContent = "Guardando...";

            try {
                const formData = new FormData(growthForm);
                const response = await fetch(growthForm.action, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                });

                if (response.ok) {
                    showToast("Respuesta enviada");
                } else {
                    console.warn("Formspree respondió:", response.status);
                    showToast("Respuesta registrada");
                }
            } catch (err) {
                console.warn("Error de conexión con Formspree:", err);
                showToast("Respuesta registrada");
            } finally {
                // Avanzamos automáticamente a la Pantalla 3
                setTimeout(() => {
                    document.getElementById("btnSubmitText").textContent = originalText;
                    goToScreen("screen-p3");
                }, 400);
            }
        });
    }

    // 3. Formulario de Pantalla 3C (¿Qué te hace sentir así?) a Formspree
    const felicidadInput = document.getElementById("felicidadInput");
    const btnSubmitFelicidad = document.getElementById("btnSubmitFelicidad");
    const felicidadForm = document.getElementById("felicidad-form");

    if (felicidadInput && btnSubmitFelicidad) {
        felicidadInput.addEventListener("input", () => {
            btnSubmitFelicidad.disabled = felicidadInput.value.trim().length === 0;
        });
    }

    if (felicidadForm) {
        felicidadForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const textValue = felicidadInput.value.trim();
            if (!textValue) return;

            btnSubmitFelicidad.disabled = true;
            const originalText = document.getElementById("btnFelicidadText").textContent;
            document.getElementById("btnFelicidadText").textContent = "Enviando...";

            try {
                const formData = new FormData(felicidadForm);
                await fetch(felicidadForm.action, {
                    method: "POST",
                    body: formData,
                    headers: { "Accept": "application/json" }
                });
            } catch (err) {
                console.warn("Error enviando formulario de felicidad:", err);
            } finally {
                // Mostrar confirmación y ocultar el formulario
                const formWrapper = document.getElementById("p3c-form-wrapper");
                const confirmBox = document.getElementById("p3c-confirm");
                if (formWrapper) formWrapper.style.display = "none";
                if (confirmBox) confirmBox.style.display = "block";
            }
        });
    }

    // 4. Generador de corazones flotantes de fondo
    initFloatingParticles();

    // 5. Iniciar la secuencia de introducción tipo Sistema Operativo
    startIntro();
});

/**
 * Redirige a WhatsApp al presionar "Okay" en la confirmación de felicidad
 */
function redirectToWhatsApp() {
    // Número de teléfono de Reinaldo en formato internacional (sin + ni espacios)
    const phoneNumber = "584127654321"; // ← Cambia este número por el tuyo real
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
}

/**
 * =========================================================================
 * SECUENCIA DE INTRODUCCIÓN TIPO SISTEMA OPERATIVO
 * =========================================================================
 */
const INTRO_PHRASES = [
    "Dear enanita,",
    "Creo que esta vez se me fue la mano con lo que quise hacerte",
    "Pero mi amor por ti es más fuerte que cualquier otra cosa",
    "Hay miles de cosas que me gustaría decir",
    "Ojalá pudiera ponerlas todas en un solo lugar",
    "Y esta vez, estoy intentando hacerlo",
    "Espero siempre puedas recordar cuanto te amo",
    "Incluso si un día ya no estoy aqui",
    "Bueno, te dejo con el regalo",
    "Te amo, mi niña."
];

let introCurrentIndex = 0;
let introTimer = null;
let isIntroActive = true;
let isIntroAnimating = false;

function startIntro() {
    initIntroSparkles();
    showIntroPhrase(0);
}

function showIntroPhrase(index) {
    if (!isIntroActive) return;

    if (index >= INTRO_PHRASES.length) {
        endIntro();
        return;
    }

    introCurrentIndex = index;
    const introTextEl = document.getElementById("introText");
    if (!introTextEl) {
        endIntro();
        return;
    }

    isIntroAnimating = true;
    introTextEl.textContent = INTRO_PHRASES[index];
    introTextEl.classList.remove("fading");
    introTextEl.classList.add("visible");

    // Tiempo de lectura más pausado y cómodo (mínimo 3.8s y hasta 5.4s)
    const phraseLength = INTRO_PHRASES[index].length;
    const displayDuration = Math.min(Math.max(phraseLength * 85, 3800), 5400);

    introTimer = setTimeout(() => {
        fadeAndNext();
    }, displayDuration);
}

function fadeAndNext() {
    if (!isIntroActive) return;

    const introTextEl = document.getElementById("introText");
    if (introTextEl) {
        introTextEl.classList.remove("visible");
        introTextEl.classList.add("fading");
    }

    // Esperar a que el desvanecido suave (1.2s en CSS) se complete antes de la siguiente frase
    introTimer = setTimeout(() => {
        isIntroAnimating = false;
        showIntroPhrase(introCurrentIndex + 1);
    }, 1150);
}

/**
 * Avanza a la siguiente frase cuando el usuario toca la pantalla
 */
function nextIntroPhrase() {
    if (!isIntroActive) return;

    clearTimeout(introTimer);
    const introTextEl = document.getElementById("introText");
    // Si ya está desvaneciéndose, pasar de inmediato a la siguiente frase para una interacción ágil
    if (introTextEl && introTextEl.classList.contains("fading")) {
        isIntroAnimating = false;
        showIntroPhrase(introCurrentIndex + 1);
    } else {
        fadeAndNext();
    }
}

/**
 * Finaliza la introducción y muestra el cuestionario principal
 */
function endIntro() {
    if (!isIntroActive) return;
    isIntroActive = false;
    clearTimeout(introTimer);

    const overlay = document.getElementById("introOverlay");
    if (overlay) {
        overlay.classList.add("hidden");
        setTimeout(() => {
            overlay.style.display = "none";
        }, 1400);
    }
}

/**
 * Destellos sutiles en el fondo de la introducción
 */
function initIntroSparkles() {
    const container = document.getElementById("introParticlesBg");
    if (!container) return;

    const sparkles = ["✦", "✧", "✨", "·", "•"];
    for (let i = 0; i < 22; i++) {
        const span = document.createElement("span");
        span.className = "intro-sparkle";
        span.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        span.style.left = `${Math.random() * 94 + 3}%`;
        span.style.top = `${Math.random() * 90 + 5}%`;
        span.style.animationDuration = `${Math.random() * 4 + 3}s`;
        span.style.animationDelay = `${Math.random() * 4}s`;
        span.style.fontSize = `${Math.random() * 0.8 + 0.6}rem`;
        container.appendChild(span);
    }
}

/**
 * Genera partículas sutiles de corazones en el fondo
 */
function initFloatingParticles() {
    const container = document.getElementById("floatingBg");
    if (!container) return;

    const icons = ["💕", "💖", "🌸", "✨", "🤍"];
    const totalParticles = 12;

    for (let i = 0; i < totalParticles; i++) {
        const particle = document.createElement("div");
        particle.className = "floating-heart-particle";
        particle.textContent = icons[Math.floor(Math.random() * icons.length)];

        const leftPercent = Math.random() * 94 + 3; // 3% a 97%
        const animDuration = Math.random() * 10 + 12; // 12s a 22s
        const animDelay = Math.random() * 15; // 0s a 15s
        const fontSize = Math.random() * 0.9 + 0.8; // 0.8rem a 1.7rem

        particle.style.left = `${leftPercent}%`;
        particle.style.animationDuration = `${animDuration}s`;
        particle.style.animationDelay = `${animDelay}s`;
        particle.style.fontSize = `${fontSize}rem`;

        container.appendChild(particle);
    }
}


