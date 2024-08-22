import webAppsImage from '../../assets/webapp.jpg';
import mobileAppsImage from '../../assets/mobile.jpg';
import desktopAppsImage from '../../assets/desktop.jpg';
import websitesImage from '../../assets/website.jpg';
import consultingImage from '../../assets/consulting.jpg';
import dataAnalysisImage from '../../assets/data.jpg';

// ContentProvider.js
class OfferInfo {
    static content = {
        'web-apps': {
            text: 'We specialize in developing cutting-edge web applications using the latest technologies like React, Angular, and Vue.js.\n\n' +
                'Our web apps are designed to be robust, secure, and scalable, with features powered by AI to enhance user interactions and business intelligence.\n\n' +
                'From e-commerce platforms to complex business solutions, we ensure your web applications provide a seamless user experience and support your growth objectives.',
            image: webAppsImage
        },

        'mobile-apps': {
            text: 'Our mobile app development services deliver high-quality applications for both iOS and Android platforms, utilizing Swift, Kotlin, and Flutter.\n\n' +
                'We prioritize intuitive design, high performance, and strong security, integrating AI features such as personalized user experiences and real-time analytics.\n\n' +
                'Our mobile apps are crafted to connect businesses with their customers effectively, ensuring a smooth and engaging mobile experience.',
            image: mobileAppsImage
        },

        'desktop-apps': {
            text: 'We develop powerful and reliable desktop applications using technologies like Electron and .NET.\n\n' +
                'Our desktop solutions are designed for optimal performance and security, featuring advanced capabilities like AI-driven automation and seamless system integration.\n\n' +
                'Whether you need custom ERP systems or sophisticated data analysis tools, our desktop applications are built to enhance your productivity and operational efficiency.',
            image: desktopAppsImage
        },

        'websites': {
            text: 'Our website development services create visually appealing and high-performing sites using the latest web technologies such as HTML5, CSS3, and JavaScript.\n\n' +
                'We focus on creating responsive designs that adapt to all devices, with AI-powered features like chatbots and personalized content to boost user engagement.\n\n' +
                'Our websites are optimized for search engines and user experience, helping you make a strong first impression and drive conversions.',
            image: websitesImage
        },

        'consulting': {
            text: 'Our IT consulting services provide expert guidance on navigating the complexities of modern technology.\n\n' +
                'We offer strategic advice on cloud computing, AI integration, and digital transformation to optimize your IT infrastructure and align it with your business goals.\n\n' +
                'With our support, you can improve efficiency, reduce costs, and leverage new technologies to stay ahead of the competition.',
            image: consultingImage
        },

        'data-analysis': {
            text: 'Our data analysis services transform raw data into valuable insights using advanced analytics tools and AI.\n\n' +
                'We help you uncover patterns, trends, and correlations to make informed decisions and drive business growth.\n\n' +
                'Our clear, visual reports and actionable insights empower you to optimize operations, understand customer behavior, and anticipate future trends.',
            image: dataAnalysisImage
        }
    };
}

export default OfferInfo;
