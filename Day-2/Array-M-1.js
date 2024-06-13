var scripts=new Array();
            scripts[0]="PHP";
            scripts[1]="ASP";
            scripts[2]="JavaScript";
            scripts[3]="HTML";
            scripts[50]="VbScript";
            scripts.push("Shellscript");
            document.write("<br>Length: "+scripts.length);
            document.write("<hr>")
            var str = scripts.join(" : ");
            document.write(str);
            document.write(scripts.join(" <br> "));