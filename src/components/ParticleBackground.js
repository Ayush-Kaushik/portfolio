import React from 'react';
import Particles from "react-particles-js";

const ParticleBackground = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                overflowY: "hidden"
            }}
        >
        <Particles
            params={{
                particles: {
                    number: {
                        value: 200
                    },
                    links: {
                        color: "#000000",
                        distance: 100,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 10,
                            color: "#000000"
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
                        bounce: true,
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
                        onhover: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: 40,
                            duration: 2,
                            opacity: 8,
                            speed: 3
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
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