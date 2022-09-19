import React from "react";
import "./Section.css";

const Section = () => {
    return ( 
        <section id="contacto" class="section section--secondary section--contacto">
                <div class="container container--element">
                    <h2 class="section__title">📞 CONTACTO 📞</h2>                
                    <form class="form">
                        <div class="form__group">
                            <input type="text" placeholder="Nombre" class="form__input" name="name" maxlength="250" required />
                            
                        </div>
                        <div class="form__group">
                            <input type="tel" placeholder="Celular" class="form__input" pattern="[0-9]+" title="Ingresar un número de celular" required />
                        </div>
                        <div class="form__group">     
                            <input type="email" class="form__input" name="email" placeholder="Correo" required /> 
                            <button class="button button--secondary b-radius-none">Enviar</button> 
                        </div>                           
                    </form>
                    <ul class="menu">
                        <li>
                            <a href="https://www.facebook.com/Rodtiigo/"  class="menu__img">
                                <i class="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/51987095779?text=Confirmo%20mi%20cita" class="menu__img">
                                <i class="bi bi-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/arandaybanez/" class="menu__img">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </li>
                    </ul>
                    <p class="card__contacto-text">📞: 993257416 / 987095779 </p>
                    <p class="card__contacto-text"> 📩: grafisur_sac@hotmail.com</p>
                </div>                                           
        </section>
     );
}
 
export default Section;