import React from 'react';

const Font = { size: 18 };

React.createElement("h3",{ style: Font });
const Footer = () => (

<div className="footer text-center p-5 bg-light">
<div className="footer">
<p className="text-center text-secondary" >
{new Date().getFullYear()} Copyright | All Steel Works (Pty) Ltd | - All Rights Reserved.
</p> 
</div>

<div className="e-mail">
<p className="text-muted">info@allsteelwork.co.za </p>
</div>

</div>
);

export default Footer;
