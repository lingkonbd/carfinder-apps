import React from 'react';
import DynamicBanner from '../components/Shared/DynamicBanner';

const ProjectDocs = () => {
    return (
        <div>
            <DynamicBanner title="Project Documentation" />
            <div className="project-docs py-12 bg-[#F3F3FE]">
                <div className="container">
                    <div>
                        <div className="mx-auto px-[38px] py-[50px] z-10 w-full max-w-[900px] rounded-lg  bg-white">
                            <h2 class="text-[26px] font-semibold md:text-[32px] text-[#2c3345] text-center mb-0 pb-[40px] ">
                                Project Documentation
                            </h2>
                            <div className="text-center mt-5">
                                <a
                                    href="https://capital-trust-bank-ee791.web.app/"
                                    class="sm-btn mr-2"
                                >
                                    Live Website
                                </a>
                                <a
                                    href="https://github.com/emon-webdev/Capital-Trust-Bank"
                                    class="sm-btn mr-2"
                                >
                                    Client Site Code
                                </a>
                                <a
                                    href="https://github.com/AkashChakrabortty/Capital-Trust-Bank-Server"
                                    class="sm-btn "
                                >
                                    Server Site Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDocs;