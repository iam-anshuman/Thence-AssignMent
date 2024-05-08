import React, {useRef, useState} from 'react'

const QnA=[
{
    question:'Do you Offer Freelancers?',
    answer:'Yes, we offer a wide range of freelancers who are experts in their respective fields. You can hire them for your projects at affordable rates.'
},
{
    question:'What’s the guarantee that I will be satisfied with the hired talent?',
    answer:'We have a strict vetting process in place to ensure that only the best freelancers are available on our platform. However, if you are not satisfied with the hired talent, you can reach out to our support team, and we will help you find a replacement.'
},
{
    question:'Can I hire multiple talents at once?',
    answer:'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
},
{
    question:'Why should I not go to an agency directly?',
    answer:'Agencies are expensive and have a limited pool of talent. On our platform, you can find a wide range of freelancers who are experts in their respective fields at affordable rates.'
},
{
    question:'Who can help me pick a right skillset and duration for me?',
    answer:'Our support team can help you pick the right skillset and duration for your project. You can reach out to them at any time, and they will be happy to assist you.'
}
]

function FAQ() {

    const accodianRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const HandleOpenAccodian = (index) => {
        return () => {
            setActiveIndex(index);
        }
    }

  return (
    <section className='mt-20 bg-[#E8EEE7] rounded-3xl h-[80vh] w-[95vw] block mx-auto'>
        <div className='flex justify-around'>
            <div className='basis-1/2 mt-10'>
                <div className='block w-1/2 mx-auto'>
                    <div className='font-CoveredByYourGrace text-xl text-[#9E9D9D]'>What’s on your mind</div>
                    <h1 className='font-semibold text-4xl font-Manrope'>Ask Questions</h1>
                </div>
                <img className='mt-20' src="/Union.png" alt="Union" />
            </div>
            <div className='basis-1/2'>
                <div className='mt-20'>
                    {
                        QnA.map((item,index)=>{
                            return(
                                <div key={index} className='my-5 border-b-2 border-b-[#D7D7D7] pb-5 mr-20 '>
                                    <div className="flex justify-between">
                                        <div className='text-xl font-medium'>{item.question}</div>
                                        {activeIndex===index?<div className='font-semibold text-2xl cursor-pointer' onClick={HandleOpenAccodian(null)}>-</div>:<div className='font-semibold text-2xl cursor-pointer' onClick={HandleOpenAccodian(index)}>+</div>}


                                    </div>
                                        <div className={`text-[#9E9D9D] ${activeIndex===index?'':'hidden'}`}>{item.answer}</div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    </section>
  )
}

export default FAQ