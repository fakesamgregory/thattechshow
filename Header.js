$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("Header", "Header");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "Header";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Div');
        comp_comp1.code = '<header class="header-wrap bg-dark" data-pgc="tts.header">\
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">\
        <a class="navbar-brand header-title" href="/">That Tech Show</a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="navbarSupportedContent">\
            <ul class="navbar-nav mr-auto">\
                <li class="nav-item active">\
                    <a class="nav-link" href="/about-us.html">About Us</a>\
                </li>\
                <!-- <li class="nav-item">\
                            <a class="nav-link" href="/contact.html">Contact</a>\
                        </li>\
						<li class="nav-item">\
                            <a class="nav-link" href="/links.html">Links</a>\
                        </li>-->\
            </ul>\
            <!-- <form class="form-inline justify-start my-2 my-lg-0">\
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">\
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">GO</button>\
                    </form> -->\
            <a href="https://www.patreon.com/thattechshow" target="_blank" rel="noreferrer nofollow" class="button-link patreon-link"> <svg style="vertical-align: middle;" viewBox="0 0 512 512" width="15" height="15">\
                    <path fill="white" d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"></path>\
                </svg>\
                    Buy us a coffee! </a>\
        </div>\
    </nav>\
</header>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'Comp 2 / Div');
        comp_comp2.code = '<header class="header-wrap bg-dark" data-pgc="tts.header">\
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">\
        <a class="navbar-brand header-title" href="/">That Tech Show</a>\
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
        </button>\
        <div class="collapse navbar-collapse" id="navbarSupportedContent">\
            <ul class="navbar-nav mr-auto">\
                <li class="nav-item active">\
                    <a class="nav-link" href="/about-us.html">About Us</a>\
                </li>\
                <!-- <li class="nav-item">\
                            <a class="nav-link" href="/contact.html">Contact</a>\
                        </li>\
						<li class="nav-item">\
                            <a class="nav-link" href="/links.html">Links</a>\
                        </li>-->\
            </ul>\
            <!-- <form class="form-inline justify-start my-2 my-lg-0">\
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">\
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">GO</button>\
                    </form> -->\
            <a href="https://www.patreon.com/thattechshow" target="_blank" rel="noreferrer nofollow" class="button-link patreon-link"> <svg style="vertical-align: middle;" viewBox="0 0 512 512" width="15" height="15">\
                    <path fill="white" d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"></path>\
                </svg>\
                    Buy us a coffee! </a>\
        </div>\
    </nav>\
</header>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("Header_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2]);

        f.addLibSection(section);
   });
});