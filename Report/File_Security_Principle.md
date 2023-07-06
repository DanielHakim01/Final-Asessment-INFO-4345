
### 6. File Security Principles

To prevent directory traversal to our most important files, we use .htaccess to avoid users accessing our database credentials stored in config.php

.htaccess file:

Options -Indexes
RewriteEngine On
RewriteRule ^(.*)$ index.php [L]

An error will be displayed if an user tries to type in the directory of config.php

![image](https://github.com/DanielHakim01/FinalAssessmentWebSecurity/assets/47686304/e20d384e-229e-479a-9ecf-929c55038850)

## HTTPS implementation

Ensure that visitors always access  website securely by SSL<br>

![](https://github.com/DanielHakim01/Final-Asessment-INFO-4345/blob/ec2b7b4647f2ff249bd698c84f2c4237785ee970/screenshot/HttpsCert.png)
![](https://github.com/DanielHakim01/Final-Asessment-INFO-4345/blob/ec2b7b4647f2ff249bd698c84f2c4237785ee970/screenshot/HttpsSecure.png)
