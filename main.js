<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Premium | Cristian</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- AQUÍ CONECTAMOS TU ARCHIVO CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <aside class="sidebar">
        <div class="perfil-contenedor">
            <div class="foto-perfil">CRISTIAN</div>
            <div class="status-badge"></div>
        </div>
        <h1 class="nombre">Cristian</h1>
        <h2 class="rol">Content Creator</h2>

        <ul class="menu-principal">
            <li><button class="nav-btn activo" data-target="personal"><i class="fa-solid fa-user"></i> Sobre mí</button></li>
            <li><button class="nav-btn" data-target="juegos"><i class="fa-solid fa-gamepad"></i> Proyectos / Juegos</button></li>
            <li><button class="nav-btn" data-target="redes"><i class="fa-solid fa-share-nodes"></i> Mis Redes</button></li>
        </ul>
    </aside>

    <main class="contenido-area">

        <section id="personal" class="pagina activa">
            <h2 class="titulo-seccion"><i class="fa-solid fa-user-astronaut"></i> Sobre <span>mí persona</span></h2>
            <div class="grid-tarjetas">
                <div class="tarjeta" style="grid-column: span 1;">
                    <div class="tarjeta-encabezado">
                        <h3 class="tarjeta-titulo"><i class="fa-solid fa-address-card"></i> Biografía</h3>
                        <span class="badge-destacado">Activo</span>
                    </div>
                    <p class="tarjeta-desc">
                        ¡Hola! Soy Cristian, creador de contenido y jugador enfocado en el gameplay competitivo, estratégico y dinámico. Me apasiona construir comunidades y gestionar entornos gaming profesionales.
                    </p>
                </div>
                <div class="tarjeta">
                    <div class="tarjeta-encabezado">
                        <h3 class="tarjeta-titulo"><i class="fa-solid fa-id-card"></i> Player Info</h3>
                    </div>
                    <ul class="info-lista">
                        <li><i class="fa-solid fa-fingerprint" style="color: var(--acento);"></i> <strong>ID de Juego:</strong> 6813131203</li>
                        <li><i class="fa-solid fa-crosshairs" style="color: #ff4444;"></i> <strong>Estilo:</strong> Competitivo / Agresivo</li>
                        <li><i class="fa-solid fa-tv" style="color: #00ff88;"></i> <strong>Presencia:</strong> En Vivo en salas top</li>
                    </ul>
                </div>
                <div class="tarjeta">
                    <div class="tarjeta-encabezado">
                        <h3 class="tarjeta-titulo"><i class="fa-solid fa-star"></i> Reconocido en</h3>
                    </div>
                    <p class="tarjeta-desc" style="margin-bottom: 10px;">Participante destacado en las transmisiones de:</p>
                    <ul class="info-lista">
                        <li><i class="fa-solid fa-circle-play"></i> <strong>El PC</strong></li>
                        <li><i class="fa-solid fa-circle-play"></i> <strong>La Plaga44</strong></li>
                        <li><i class="fa-solid fa-circle-play"></i> <strong>Temu</strong></li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="juegos" class="pagina">
            <h2 class="titulo-seccion"><i class="fa-solid fa-cubes"></i> Mis <span>Proyectos y Juegos</span></h2>
            <div class="filtros-container">
                <button class="btn-filtro activo" data-filter="freefire"><i class="fa-solid fa-fire"></i> Free Fire</button>
                <button class="btn-filtro" data-filter="minecraft"><i class="fa-solid fa-cube"></i> Minecraft</button>
                <button class="btn-filtro" data-filter="desarrollo"><i class="fa-solid fa-code"></i> Desarrollo</button>
                <button class="btn-filtro" data-filter="otros"><i class="fa-solid fa-wand-magic-sparkles"></i> Otros</button>
            </div>

            <div id="freefire" class="categoria-contenido activa">
                <div class="grid-tarjetas">
                    <div class="tarjeta">
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-solid fa-trophy"></i> Perfil Competitivo</h3>
                            <span class="badge-destacado" style="color:#ff8800; border-color:#ff8800; background:rgba(255,136,0,0.1)">High Tier</span>
                        </div>
                        <p class="tarjeta-desc">Participación constante en torneos organizados, salas competitivas y un posicionamiento sólido en los rankings más altos de la temporada.</p>
                    </div>
                    <div class="tarjeta">
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-solid fa-video"></i> Montajes Core</h3>
                            <span class="badge-destacado" style="color:#ff4444; border-color:#ff4444; background:rgba(255,68,68,0.1)">Creador</span>
                        </div>
                        <p class="tarjeta-desc">Edición especializada de clips estilo "core" integrando efectos de sonido envolventes (como transiciones explosivas) para crear videos de alto impacto visual en redes sociales.</p>
                    </div>
                </div>
            </div>

            <div id="minecraft" class="categoria-contenido">
                <div class="grid-tarjetas">
                    <div class="tarjeta">
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-solid fa-shield-halved"></i> Staff & Administración</h3>
                            <span class="badge-destacado" style="color:var(--comunidad); border-color:var(--comunidad); background:rgba(168,85,247,0.1)">Helper</span>
                        </div>
                        <p class="tarjeta-desc">Experiencia en soporte técnico, moderación comunitaria dentro del servidor y asistencia integral para garantizar la mejor experiencia a los usuarios.</p>
                    </div>
                    <div class="tarjeta">
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-solid fa-server"></i> Optimización Técnica</h3>
                        </div>
                        <p class="tarjeta-desc">Ajustes avanzados de rendimiento, configuración de launchers de terceros, y gestión experta de mods orientados a la estabilidad de FPS y la optimización de clics por segundo (CPS) y pings en servidores internacionales.</p>
                    </div>
                </div>
            </div>

            <div id="desarrollo" class="categoria-contenido">
                <div class="grid-tarjetas">
                    <div class="tarjeta">
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-solid fa-window-maximize"></i> Dashboard Personal</h3>
                            <span class="badge-destacado" style="color:#00ff88; border-color:#00ff88; background:rgba(0,255,136,0.1)">Web</span>
                        </div>
                        <p class="tarjeta-desc">Diseño front-end y programación de este portafolio interactivo utilizando HTML5 estructurado, CSS3 avanzado (con variables y animaciones nativas) y JavaScript para la lógica de navegación dinámica.</p>
                    </div>
                    <div class="tarjeta">
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-solid fa-microchip"></i> Edición e IA</h3>
                        </div>
                        <p class="tarjeta-desc">Uso avanzado de herramientas de manipulación gráfica e inteligencia artificial para la edición fotorrealista de imágenes (intercambios de rostros y ropa) aplicadas tanto a entretenimiento como a la creación de assets.</p>
                    </div>
                </div>
            </div>

            <div id="otros" class="categoria-contenido">
                <div class="grid-tarjetas">
                    <div class="tarjeta">
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-solid fa-palette"></i> Diseño 3D & Branding</h3>
                        </div>
                        <p class="tarjeta-desc">Desarrollo de identidad visual gamer: creación de miniaturas de alto impacto para YouTube, logotipos personalizados y renders 3D estructurados.</p>
                    </div>
                    <div class="tarjeta">
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-solid fa-book-open"></i> Proyecto Narrativo Gráfico</h3>
                            <span class="badge-destacado" style="color:#f1c40f; border-color:#f1c40f; background:rgba(241,196,15,0.1)">Creativo</span>
                        </div>
                        <p class="tarjeta-desc">Desarrollo en paralelo de un proyecto ilustrado independiente ("pinto cuento"), investigando referencias antropológicas reales y detalles morfológicos (como cráneos de homínidos) para el diseño conceptual de la historia.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="redes" class="pagina">
            <h2 class="titulo-seccion"><i class="fa-solid fa-bullhorn"></i> Comunidad & <span>Redes</span></h2>
            <div class="grid-tarjetas">
                <div class="tarjeta tarjeta-red youtube">
                    <div>
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-brands fa-youtube"></i> YouTube</h3>
                        </div>
                        <p class="tarjeta-desc">Subo gameplays competitivos, mejores momentos de los directos y guías de optimización técnica.</p>
                    </div>
                    <a href="https://www.youtube.com/@josneikermendoza4605" target="_blank" class="btn-red"><i class="fa-solid fa-arrow-up-right-from-square"></i> Ver Canal</a>
                </div>
                <div class="tarjeta tarjeta-red discord">
                    <div>
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-brands fa-discord"></i> Discord</h3>
                        </div>
                        <p class="tarjeta-desc">Comunidad oficial para interactuar en salas de voz, coordinar partidas y recibir soporte de proyectos.</p>
                    </div>
                    <button onclick="copiarDiscord('sradmin223', this)" class="btn-red"><i class="fa-solid fa-copy"></i> Copiar: sradmin223</button>
                </div>
                <div class="tarjeta tarjeta-red tiktok">
                    <div>
                        <div class="tarjeta-encabezado">
                            <h3 class="tarjeta-titulo"><i class="fa-brands fa-tiktok"></i> TikTok</h3>
                        </div>
                        <p class="tarjeta-desc">Clips cortos de jugadas épicas, edits limpios y momentos divertidos sacados de los lives.</p>
                    </div>
                    <a href="https://www.tiktok.com/@cristian1212cris" target="_blank" class="btn-red"><i class="fa-solid fa-bolt"></i> Ver Clips</a>
                </div>
            </div>
        </section>

    </main>

    <!-- AQUÍ CONECTAMOS TU ARCHIVO JAVASCRIPT -->
    <script src="main.js"></script>
</body>
</html>
