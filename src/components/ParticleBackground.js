import React, {useState} from 'react';
import Particles from "react-particles-js";

const ParticleBackground = () => {
    const [numParticles, setNumParticles] = useState(20);
    const handleResize = () => {

        const width = window.innerWidth;
        let num_nb;
        if(width > 500) {
            num_nb = Math.round(Math.sqrt(width / 0.5));
        } else {
            num_nb = Math.round(Math.sqrt(width / 4));
        }

        setNumParticles(num_nb);
    }

    window.addEventListener("resize", handleResize);


    return (
        <div
            className={"particle-background"}
        >
        <Particles
            params={{
                particles: {
                    number: {
                        value: numParticles
                    },
                    links: {
                        color: "#979595",
                        distance: 100,
                        enable: true,
                        opacity: 0.5,
                        width: 2
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 2,
                            color: "#979595"
                        }
                    },
                    opacity: {
                        value: 0.4008530152163807,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: true
                        }
                    },
                    size: {
                        value: 1.5,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 1,
                        color: "#ffffff",
                        opacity: 0.3687847739990702,
                        width: 0.6413648243462091
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "window",
                    events: {
                        onresize: {
                            enable: true,
                            density_auto: true,
                            density_area: 400
                        }
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 0.5
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 20,
                            duration: 2,
                            opacity: 3,
                            speed: 3
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            }}
        />
        </div>
    )
}

export default ParticleBackground;