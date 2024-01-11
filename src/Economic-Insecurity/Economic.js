import React from "react";
import "./Economic.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../blog/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../blog/Footer';
import customTheme from '../customTheme';
import { sections } from '../sections';
import energyImage from '../Images/economic1.jpeg';
import lightImage from '../Images/light.png';
import { Line } from 'react-chartjs-2';
import 'chart.js';
import { useInView } from 'react-intersection-observer';
import { useScrollToTop } from '../blog/useScrollToTop';

const economicData = {
    labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    datasets: [
      {
        label: 'Global Economic Impact ($ in billions)',
        data: [40, 420, 156, 188, 67, 70, 617, 37, 410, 50, 55, 70, 37, 47, 40, 205, 45, 44],
        fill: true,
        borderWidth: 2,
        backgroundColor: 'rgb(75, 192, 192, 0.1)',
        borderColor: 'rgba(75, 192, 192, 0.8)',
        pointBackgroundColor: 'rgba(75,75,192,1)'
      },
    ],
  };

  

const Economic = () => {

    useScrollToTop();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        animations: {
            tension: {
              easing: 'linear',
              from: 1,
              to: 0,
              loop: false
            }
        },
        animation: {
            onComplete: () => {},
            delay: (context) => inView ? context.dataIndex * 300 + context.datasetIndex * 100 : 0,
        }
    
        
      };

      
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Header title="Climate Security and Risks" sections={sections} />

            <main>
                <div className="economic-header-div">
                    <h1 className="economic-header-text">
                        Economic Insecurity and Energy Challenges
                    </h1>
                </div>
                <div className="migration-divider"/>

                <div className="economic-section">
                    <div className="content-flex">
                        <div className="text-content">
                            <h3>Introduction to Economic Insecurity</h3>
                            <p className="conflict-explain-p-larger">
                            Economic insecurity is a growing concern in today's world, and it is closely intertwined with the challenges posed by climate change. As the planet experiences shifts in climate patterns, extreme weather events, and environmental degradation, the global economy faces a range of uncertainties. This section provides an in-depth introduction to economic insecurity and explores how climate change is influencing global economics.
                            </p>
                            <p className="conflict-explain-p-larger">
                            Climate change affects economic stability in various ways, from disrupting supply chains to increasing the frequency and severity of natural disasters. These changes can lead to financial losses, job insecurity, and reduced economic growth. Understanding the link between climate and economic insecurity is crucial for devising effective strategies to address these challenges.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="economic-section">
                    <div className="content-flex">
                        <div className="text-content">
                            <h3>Energy Challenges</h3>
                            <p className="conflict-explain-p-larger">
                            One of the key dimensions of economic insecurity in the context of climate change is energy challenges. The world's energy systems are undergoing a transformation as countries strive to reduce their carbon footprint and transition to renewable energy sources. The transition to clean and sustainable energy is essential for mitigating the impacts of climate change. However, it comes with its own set of challenges, including the need for significant investments in infrastructure, the phasing out of fossil fuels, and ensuring energy security in a changing climate.
                            </p>
                        </div>
                        <img src={energyImage} alt="Global Economy Chart" />
                    </div>
                </div>

                <div className="economic-section">
                    <div className="text-content">
                        <h3>Case Studies</h3>
                        <p className="conflict-explain-p-larger">
                        Real-world examples provide valuable insights into the economic challenges posed by climate change. This section presents case studies that highlight specific instances of economic insecurity caused by climate-related events. These cases offer practical lessons and illustrate the complexities of the issue.
                        </p>
                        <p className="conflict-explain-p-larger">
                        By examining case studies from different parts of the world, we gain a deeper understanding of the diverse economic challenges posed by climate change. These examples underscore the importance of resilience and adaptation in the face of a changing climate.
                        </p>
                    </div>
                </div>

                <div className="economic-section">
                    <div className="text-content">
                        <h3>Global Economic Impact</h3>
                        <p className="conflict-explain-p-larger">
                        The global economic impact of climate change is a topic of great significance. Climate-related events, such as extreme weather events, rising sea levels, and changing precipitation patterns, can have far-reaching consequences on economies worldwide. In this section, we explore the wide-ranging effects of climate change on the global economy.
                        </p>
                        <p className="conflict-explain-p-larger">
                        From reduced agricultural productivity to increased healthcare costs associated with climate-related illnesses, the economic impact of climate change is multifaceted. We examine how these impacts vary across regions and sectors and discuss the urgent need for proactive measures to minimize economic losses.
                        </p>
                        <div style={{ padding: '75px' }}>
                            {inView || <Line data={economicData} options={options} />}
                        </div>
                    </div>
                </div>

                <div className="economic-section">
                    <div className="content-flex">
                        <div className="text-content">
                            <h3>Potential Solutions</h3>
                            <p className="conflict-explain-p-larger">
                            Addressing economic insecurity and energy challenges in the era of climate change requires innovative solutions and strategies. In this section, we engage in a discussion of potential solutions to mitigate economic risks and promote sustainable economic growth.
                            </p>
                            <p className="conflict-explain-p-larger">
                            From investing in green technologies to implementing climate-resilient infrastructure projects, there are numerous avenues for action. We explore policy initiatives, international collaborations, and private sector engagement as part of the toolkit to build economic resilience in the face of climate-related uncertainties.
                            </p>
                            <p className="conflict-explain-p-larger">
                            This page serves as a comprehensive resource for understanding the intricate relationship between economic insecurity, energy challenges, and climate change. It emphasizes the importance of proactive measures and global cooperation in safeguarding our economic future in a changing climate.
                            </p>
                        </div>
                        <div className="side-image">
                        <img src={lightImage} alt="Solution" />
                        </div>
                    </div>
                </div>
            </main>

            <Footer title="Climate Security and Risks" description="Arman Gökalp - Ali Vehbi Güneysu" />
        </ThemeProvider>
    )
}

export default Economic;