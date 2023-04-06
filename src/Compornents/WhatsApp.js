import React from 'react';
import WhatsAppWidget from 'react-whatsapp-chat-widget';

const WhatsApp = () => {
    return (
        <div className='p-3 fixed bottom-0 right-0'>
         <WhatsAppWidget
			phoneNo="01835199061"

			position="right"
			widgetWidth="300px"
			widgetWidthMobile="360px"
			autoOpenTimer={5000}
			messageBox={true}
			iconSize="100"
			iconBgColor="#0000"

			headerIcon="https://i.ibb.co/9tbLFkM/myImage.png"
			headerTitle="Dear Sir"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Support"
			chatMessage={<>Hi there 👋 <br /> How can I help you? <br /> <br />I am Rashel Mahomud <br/> 👋As a web Developer.</>}
			footerBgColor="#999"
			placeholder="Type a message.."
			btnBgColor="yellow"
			btnTxt="Start Chat"
			btnTxtColor="black"
            
		/>
        </div>
    );
};

export default WhatsApp;