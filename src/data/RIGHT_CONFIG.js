import doctor from '../Assets/svg/doctor.svg';
import text from '../Assets/svg/text.svg';
import image from '../Assets/svg/Image.svg';

export const RIGHT_CONFIG = {
    main: {
        contentTitle: [],
        questionAnswer: [
            {
                type: 'video',
                title: 'video',
                content: {
                    video: "/videos/psych_post_divorce_adjustment.mp4"
                }
            }],
        script: "Hi, I’m Dr. Mathilde Feldman. … (main tab script content here)",
        showVideoPage: true,
    },
    tab2: {
        contentTitle: [
            "Read the Research artifacts and collect notes, and evidence. You can highlight and save anything you think is evidence worthy for your reference when you get to the make a decision tab.",
            "Read the Research artifacts and collect notes, and evidence. You can highlight and save anything you think is evidence worthy for your reference when you get to the make a decision tab.",
        ],
        questionAnswer: [
            {
                faqs: [
                    {
                        question: "First Trimester",
                        answer: "Well, it certainly was unexpected, but really, I’m super happy about it. So is Morgan, my partner. We’ve been together six years and both enjoy kids…"
                    },
                    {
                        question: "Second and Third Trimesters",
                        answer: "Well, it certainly was unexpected, but really, I’m super happy about it. So is Morgan, my partner. We’ve been together six years and both enjoy kids…"
                    },
                    {
                        question: "Mother's Age",
                        answer: "Well, it certainly was unexpected, but really, I’m super happy about it. So is Morgan, my partner. We’ve been together six years and both enjoy kids…"
                    }
                ],
            },
            {
                faqs: [
                    {
                        question: "First Trimester",
                        answer: "Well, it certainly was unexpected, but really, I’m super happy about it. So is Morgan, my partner. We’ve been together six years and both enjoy kids…"
                    },
                    {
                        question: "Second and Third Trimesters",
                        answer: "Well, it certainly was unexpected, but really, I’m super happy about it. So is Morgan, my partner. We’ve been together six years and both enjoy kids…"
                    }
                ],
            },
        ],
        script: "Dr. Feldman for Tab 2: …",
        showVideoPage: true
    },
    tab3: {
        contentTitle: [
            "Below is an email provided by her doctor.",
            "Below is an email provided by her doctor.",
            "Here is a portion of my conversation with Catarina. Click any of the questions below to view Catarina's responses during our interview.",
            "Read the Research artifacts and collect notes, and evidence. You can highlight and save anything you think is evidence worthy for your reference when you get to the make a decision tab.",
            "Below is an email provided by her doctor."
        ],
        questionAnswer: [
            {
                type: 'doctorNote',
                title: 'Doctor Note',
                content: {
                    screenshot: doctor
                }
            },
            {
                type: 'textMessage',
                title: 'Text Message',
                content: {
                    screenshot: text
                }
            },
            {
                faqs: [
                    {
                        question:
                            'Catarina, I understand you recently found out unexpectedly that you are pregnant. What has that been like for you?',
                        answer:
                            "Well, it certainly was unexpected, but really, I’m super happy about it. So is Morgan, my partner. We’ve been together six years and both enjoy kids…"
                    },
                    {
                        question: 'I understand you have some concerns as well.',
                        answer: '…(expand for details)…'
                    }
                ]
            },
            {
                type: 'chart',
                title: 'Chart Title',
                content: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun'],
                    series: [
                        { name: 'Content 1', data: [20, 10, 20, 40, 55, 20] },
                        { name: 'Content 2', data: [-20, -10, -2, 5, 10, 15] },
                        { name: 'Content 3', data: [-5, 20, 25, 28, 30, 55] },
                    ],
                    metric: '50,000',
                    subtext: '50 Orders',
                }
            },
            {
                type: 'image',
                title: 'Ultrasound',
                content: {
                    screenshot: image
                }
            }
        ],
        script: "",    // no script panel
        showVideoPage: false
    },
    tab4: {
        contentTitle: [
            "Read the Researcrtifactnd collect notes, and evidence. You can highlight and save anything you think is evidence worthy for your reference when you get to the make a decision tab.",
            "Now that you’ve nsultedhe research and reviewed the evidence, you will complete an assessment that will help you synthesize what you’ve learned and make a decision [insert content-specific information here]."
        ],
        questionAnswer: [
            {
                unorderOption: [
                    {
                        opt: "Catarina should maintain a healthy diet and appropriate exercise regimen and avoid unnecessary exposure to environmental contaminants. She should also keep taking her current antidepressants."
                    },
                    {
                        opt: "Catarina should maintain a healthy diet and appropriate exercise regimen and avoid unnecessary exposure to environmental contaminants. She should also keep taking her current antidepressants."
                    },
                    {
                        opt: "Catarina should maintain a healthy diet and appropriate exercise regimen and avoid unnecessary exposure to environmental contaminants. She should also keep taking her current antidepressants."
                    },
                    {
                        opt: "Catarina should maintain a healthy diet and appropriate exercise regimen and avoid unnecessary exposure to environmental contaminants. She should also keep taking her current antidepressants."
                    },
                    {
                        opt: "Catarina should maintain a healthy diet and appropriate exercise regimen and avoid unnecessary exposure to environmental contaminants. She should also keep taking her current antidepressants."
                    }
                ],
            },
            {
                notes: [
                    {
                        opt: "Remember, you can export a copy of the notes you’ve taken and refer to them at any time during the assessment."
                    }
                ],
            },
        ],
        script: "Dr. Feldman for Tab 4: …",
        showVideoPage: false
    }
};
