import doctor from '../Assets/svg/doctor.svg';
import text from '../Assets/svg/text.svg';
import image from '../Assets/svg/Image.svg';

export const RIGHT_CONFIG = {
    main: {
        contentTitle: [],
        questionAnswer: [
            {
                type: 'video',
                title: 'Parental divorce is a life-changing event that can require families to make big adjustments. Both parents and children can struggle to settle into new circumstances, and many factors can affect how well families navigate the transition. How much conflict is there between parents after the divorce? How important is it that the child spend time with each parent, and how much time is the right amount now that there are two households? Do other changes, like moving homes or changing schools, affect children? Review the research that can be applied to this case under "Consult the Research” and then dig deeper into the Mason family’s current circumstances  while you “Investigate the Evidence”. After you’ve gathered all the information, make a decision about what you think the best course of action is for the Masons, giving a rationale for your thinking process.',
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
                type: 'video',
                title: 'The more parental conflict there is, the higher the risk for adjustment problems to children. These adjustment problems are academic, emotional, social, and even health related (El-Sheikh & Erath, 2011; Van Dijk et al., 2020). Interparental conflict that is characterized as hostile, frequent, and child-related are particularly harmful to a child’s wellbeing (van Eldik et al., 2020).<br/><br/>Researchers have proposed that parent conflict activates the body’s biological stress response system to change hormone levels, biological systems like sleep, and physical health (Davidson et al., 2014). Kuhlman et al. (2018) have found that children living in environments characterized by high levels of interparental conflict have an exaggerated stress response when faced with a stressor.<br/><br/>Conflict between parents after divorce can be lower, higher, or the same as conflict levels pre-divorce (Cao et al., 2022). The literature has also focused on the relative contributions of pre- and post-divorce conflict.  Booth and Amato (2001) reported that children’s adjustment difficulties decrease when a high conflict marriage ends in divorce and thus, the conflict dissipates. On the other hand, parental divorce in a low-conflict marriage seems to have more negative effects on children’s well-being.',
                content: {
                    video: "/videos/psych_post_divorce_adjustment.mp4"
                },
                showScript: true
            },
            {
                faqs: [
                    {
                        question: "References:",
                        answer: "Booth, A., & Amato, P. R. (2001). Parental predivorce relations and Offspring Postdivorce Well‐Being. Journal of Marriage and the Family/Journal of Marriage and Family, 63(1), 197–212."
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
