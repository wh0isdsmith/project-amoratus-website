import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Image, Rect, Text, Circle, Group } from 'react-konva';
import useImage from 'use-image';
import { Link } from 'react-router-dom';

const QuantumMindSection = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [image] = useImage('/images/quantum-processing-schematic.svg');

    const handleMouseEnter = (e) => {
        const container = e.target.getStage().container();
        container.style.cursor = 'pointer';
    };

    const handleMouseLeave = (e) => {
        const container = e.target.getStage().container();
        container.style.cursor = 'default';
    };

    const handleCircleClick = (text) => {
        setModalContent(text);
        setShowModal(true);
    };
    
    return (
        <>
            <Stage width={800} height={600}>
                <Layer>
                    <Image image={image} />

                    <Circle
                        x={380}
                        y={250}
                        radius={30}
                        fill="transparent"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleCircleClick('This is the description for the first circle.')}
                        onTap={() => handleCircleClick('This is the description for the first circle.')}
                    />
                </Layer>
            </Stage>

            {showModal && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', zIndex: 100 }}>
                    <p>{modalContent}</p>
                    <button onClick={() => setShowModal(false)}>Close</button>
                </div>
            )}
        </>
    );
};

const Technology = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-blue-950 pt-20">
            <main className="container mx-auto px-4 py-8 text-gray-300">
                <Link to="/" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold py-2 px-4 rounded mb-4">← Back to Home</Link>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Technology Behind Project Amoratus
                </h1>
                {/* Overview Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
                    <p className="text-lg">
                        Project Amoratus is built on a foundation of cutting-edge
                        technologies, each pushing the boundaries of what&apos;s
                        possible. The core components include:
                    </p>
                    <ul className="list-disc list-inside text-lg">
                        <li>
                            <strong className="text-white">Quantum Computing:</strong> At the
                            heart of the system lies a powerful quantum computer, capable
                            of processing vast amounts of data and performing complex
                            calculations beyond the reach of classical computers.
                        </li>
                        <li>
                            <strong className="text-white">Neural Networks:</strong> Advanced
                            neural networks, modeled after the human brain, enable
                            sophisticated pattern recognition, emotional analysis, and
                            memory processing.
                        </li>
                        <li>
                            <strong className="text-white">
                                Augmented Reality (AR)/Virtual Reality (VR):
                            </strong>{' '}
                            Immersive AR and VR technologies are used to reconstruct and
                            relive memories in a vivid and interactive way.
                        </li>
                        <li>
                            <strong className="text-white">QuantumMind:</strong> A
                            mysterious alien material with unique properties, including
                            room-temperature quantum coherence and the ability to
                            interface with human neural patterns. It serves as a
                            crucial component for data storage and consciousness
                            integration.
                        </li>
                    </ul>
                </section>
                {/* QuantumMind Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        QuantumMind
                    </h2>
                    <p className="text-lg mb-4">
                        The most enigmatic component of Project Amoratus is
                        &quot;QuantumMind,&quot; an alien material discovered by Greg
                        Reeves through leaked government documents. Its origins and
                        exact composition remain unknown, but its properties are
                        extraordinary:
                    </p>
                    <ul className="list-disc list-inside text-lg mb-4">
                        <li>
                            <strong className="text-white">
                                Room-Temperature Quantum Coherence:
                            </strong>{' '}
                            Unlike conventional quantum systems that require extremely
                            low temperatures, QuantumMind maintains quantum coherence at
                            room temperature, making it incredibly efficient and
                            versatile.
                        </li>
                        <li>
                            <strong className="text-white">
                                Neural Pattern Resonance:
                            </strong>{' '}
                            QuantumMind exhibits a unique ability to resonate with
                            human neural patterns, allowing it to store and process
                            consciousness data.
                        </li>
                        <li>
                            <strong className="text-white">
                                High-Density Data Storage:
                            </strong>{' '}
                            It&apos;s estimated that a single cubic centimeter of
                            QuantumMind can store up to 2.5 petabytes of consciousness
                            data.
                        </li>
                        <li>
                            <strong className="text-white">Adaptive Learning:</strong> The
                            material appears to &quot;learn&quot; and adapt to emotional
                            states, suggesting a form of primitive intelligence or
                            sentience.
                        </li>
                    </ul>
                    <p className="text-lg">
                        QuantumMind is integrated into both the Neural Interface Headset
                        and the GregOS Core Machine, playing a crucial role in their
                        functionality.
                    </p>
                </section>
                {/* GregOS Core Machine */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        GregOS Core Machine
                    </h2>
                    <p className="text-lg mb-4">
                        The GregOS Core Machine is the central processing unit of Project
                        Amoratus. It&apos;s a custom-built supercomputer housed in a
                        heavily shielded 42U server rack. Key components include:
                    </p>
                    <ul className="list-disc list-inside text-lg mb-4">
                        <li>
                            <strong className="text-white">
                                Quantum Processing Unit (QPU):
                            </strong>{' '}
                            Cooled to near absolute zero using a dilution refrigerator,
                            the QPU performs the core quantum computations.
                        </li>
                        <li>
                            <strong className="text-white">
                                Neural Processing Array:
                            </strong>{' '}
                            A network of neural processing units that handle pattern
                            recognition, emotional analysis, and memory processing.
                        </li>
                        <li>
                            <strong className="text-white">Memory Systems:</strong> A
                            combination of quantum memory (for storing quantum states),
                            neural storage (for storing neural patterns), and a reality
                            engine storage (for AR/VR data).
                        </li>
                        <li>
                            <strong className="text-white">
                                Power and Cooling Infrastructure:
                            </strong>{' '}
                            Robust systems to ensure stable operation and prevent
                            overheating.
                        </li>
                    </ul>
                    {/* Interactive Diagram */}
                    <QuantumMindSection />
                </section>
                {/* Neural Interface Headset */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Neural Interface Headset (NIH-1)
                    </h2>
                    <p className="text-lg mb-4">
                        The Neural Interface Headset is a revolutionary device designed
                        by Greg Reeves to interface directly with the human brain. Key
                        features include:
                    </p>
                    <ul className="list-disc list-inside text-lg mb-4">
                        <li>
                            <strong className="text-white">
                                Neural Sensor Array:
                            </strong>{' '}
                            Made from QuantumMind, these non-invasive sensors detect and
                            transmit neural patterns with high fidelity.
                        </li>
                        <li>
                            <strong className="text-white">
                                Quantum Processing Unit:
                            </strong>{' '}
                            A smaller version of the QPU found in the Core Machine, this
                            unit performs initial processing of neural data.
                        </li>
                        <li>
                            <strong className="text-white">
                                High-Resolution Display:
                            </strong>{' '}
                            An 8K per eye display with a 240Hz refresh rate provides an
                            immersive visual experience.
                        </li>
                        <li>
                            <strong className="text-white">
                                Biometric Sensors:
                            </strong>{' '}
                            These sensors monitor the user&apos;s physiological state,
                            ensuring safety and providing feedback to the system.
                        </li>
                    </ul>
                    <p className="text-lg">
                        The headset is powered by a solid-state quantum battery and
                        incorporates a liquid nitrogen micro-circulation system for
                        cooling.
                    </p>
                </section>
                {/* Add more sections as needed */}
            </main>
        </div>
    );
};

export default Technology;