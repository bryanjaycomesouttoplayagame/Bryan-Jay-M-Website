<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Home | Bryan Jay M. Lumabas</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

    <!-- External Stylesheet -->
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-transparent">
            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar Menu Items -->
                <div class="nav-items nav-links">
                    <ul class="navbar-nav">
                        <li><a href="home.html" class="nav-link" style="padding: 20px 20px;"><i class="fa-solid fa-warehouse fa-flip fa-sm" style="color: #543800;"></i><span style="margin-left: 40px;" a href="#" onclick="loadPage('home.html')">HOME</a></span></a></li>
                        <li><a href="projects.html" class="nav-link" style="padding: 20px 20px;"><i class="fa-regular fa-folder-open fa-beat fa-sm" style="color: #543800;"></i><span style="margin-left: 40px;" a href="#" onclick="loadPage('projects.html')">PROJECTS</a></span></a></li>
                        <li><a href="summary.html" class="nav-link"style="padding: 20px 20px;"><i class="fa-solid fa-lightbulb fa-fade fa-l" style="color: #543800;"></i><span style="margin-left: 40px;" a href="#" onclick="loadPage('summary.html')">SUMMARY</a></span></a></li>
                        <li><a href="about.html" class="nav-link"style="padding: 20px 20px;"><i class="fa-solid fa-hourglass fa-spin fa-sm" style="color: #543800;"></i><span style="margin-left: 40px;" a href="#" onclick="loadPage('about.html')">ABOUT</a></span></a></li>
                        <li><a href="#contacts" class="nav-link"style="padding: 20px 20px;"><i class="fa-solid fa-address-book fa-beat-fade fa-sm" style="color: #543800;"></i><span style="margin-left: 40px;">CONTACTS</span></a></li>
                    </ul>
                </div>
            </div>

            <!-- Page Content Wrapper -->
            <div id="page-content-wrapper">
                <div class="container-fluid d-flex align-items-center py-3">
                    <!-- Menu Toggle -->
                    <button 
                        class="btn btn-light me-3" 
                        id="menu-toggle" 
                        style="background-color: transparent; color: #6a543d; border: none;"><i class="fa-solid fa-sliders fa-fade fa-2xl" style="color: #6b4b00;"></i></button>

                    <!-- Search Bar -->
                    <form 
                        class="d-flex mx-auto flex-grow-1" 
                        action="https://www.google.com/search" 
                        method="get" 
                        target="_blank" 
                        style="max-width: 600px;">
                        <input 
                            class="form-control me-2" 
                            type="search" 
                            name="q" 
                            placeholder="Browse in Chatterbox" 
                            style="background-color: #f5f5dc" 
                            required>
                        <button 
                            class="btn btn-light" 
                            type="submit" 
                            style="background-color: transparent; color: #6a543d; border: none;">
                            🔍
                        </button>
                    </form>

                    
                    <!-- Dark Mode Toggle -->
                  <div class="form-check form-switch ms-3 custom-toggle">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      id="theme-toggle" 
                      onclick="toggleTheme()">
                      <label for="theme-toggle"></label>
                  </div>
                </div>
            </div>
        </nav>
    </header>
    
<!-- Main Content -->
<div class="container-fluid py-4">
    <div class="video-container">
        <video class="video-background" autoplay loop muted>
            <source src="Greetings_20241124.mp4" type="video/mp4">
        </video>
    </div>
    <div class="hero-image" style="background: url('BJML_Logo_20241124.jpg') no-repeat center center/cover;">
    </div>
</div>

<br><div style="text-align: center;">
  <audio controls>
    <source src="Record for Home.mp3" type="audio/mpeg"><audio controls>
  </audio>
</div><br>
<div style="text-align: center;"><h6>[If you don't want to read, you can listen to my monotonous voice dub here.]</h6></div></br>

        <h1 class="my-3">Featured in the Silhouttes</h1>
        <p>Hello! I'm Bry! This website is called bjml at html. Without further ado, I am pleased to introduce my personal portfolio just for you. Here's some of my previous academic activities, projects, and tasks featuring down below:</p>
        
<div class="download-section first-section">
    <h4>Midterm Project at Introduction to Computing</h4>
    <a href="[CC1] Introduction to Computing.docx" download class="download-btn">
        <i class="fa-solid fa-circle-down fa-flip fa-2xl" style="color: #f5f5dc;"></i>
    </a>
</div>
<br><span style="margin-left: 40px;"><p><span style="margin-left: 40px;"> Let's</span> delve into the basics of computing. The introductory to a fast-pacing change of technology. Each topics emphasize the importance of learning and how it applies in real-world technicalization. This file summarizes the lesson learned in the specific course. Reflect and realizations elaborated accordingly. You can download the word document by clicking the spinning circle down icon, seen right from description above.</p></span></br>

<div class="download-section second-section">
    <h4>Coding Activities in Computer Programming</h4>
    <a href="[CC2] Computer Programming.zip" download class="download-btn">
        <i class="fa-solid fa-circle-down fa-flip fa-2xl" style="color: #f5f5dc;"></i>
    </a>
</div>
<br><span style="margin-left: 40px;"><p><span style="margin-left: 40px;"> Let's</span> analyze problems that's solvable in this given various tasks. Programming instructs a computer that processes data, solves difficult calculations, and performing an algorithmic operations and many more. This zip file provided a solution in the problem or given activities as well. You can download the compressed file by clicking the spinning circle down icon, seen right from description above.</p></span></br>

<div class="download-section third-section">
    <h4>Presentation Regards with Self as Social</h4>
    <a href="[GE1] The Social Self Version 2.0.pptx" download class="download-btn">
        <i class="fa-solid fa-circle-down fa-flip fa-2xl" style="color: #f5f5dc;"></i>
    </a>
</div>
<br><span style="margin-left: 40px;"><p><span style="margin-left: 40px;"> Let's</span> examine and talk about ourselves. As a human, we love to talk about our status in life, gossips are common in social interaction even in social platforms, seeking validation on someone you inspired to, please the one you love and commemorate nostalgic moments on how such a glory days in a pompous statement. This presentation gives you an insights of how to be you as a social individual. You can download the document by clicking the spinning circle down icon, seen right from description above.</p></span></br>

<div class="download-section fourth-section">
    <h4>Evolution of the Philippine Constitutions</h4>
    <a href="[GE2] Philippine Constitutions.pptx" download class="download-btn">
        <i class="fa-solid fa-circle-down fa-flip fa-2xl" style="color: #f5f5dc;"></i>
    </a>
</div>
<br><span style="margin-left: 40px; align-items: center;"><p><span style="margin-left: 40px;"> Let's</span> determine and comprehend as we read about the study of the past. Some scenarios in our government today does exists before. There is nothing unusual for that recurrences. History repeats itself aren't they? This is an interesting questions in our existence, thus, sometimes we must meddle with our society for some reasons. Let's perceive the law by focusing on the previous constitutions and the present republic of the Philippines. In order to understand, you can download the slide document by clicking the spinning circle down icon, seen right from description above.</p></span></br>

<div class="download-section fifth-section">
    <h4>Description of Final Project at Introduction to Computing</h4>
    <a href="FINAL-PROJECT_STATIC-WEB-DEVELOPMENT.pdf" download class="download-btn">
        <i class="fa-solid fa-circle-down fa-flip fa-2xl" style="color: #f5f5dc;"></i>
    </a>
</div>
<br><span style="margin-left: 40px;"><p><span style="margin-left: 40px;"> Let's</span> look at the description given. This is such a blast! Making a personal portfolio sync in the web development was a great idea. This portable document format file sets the instructions of how to make a website. However, is it more exciting if you put some unconventional ways to render? You can download the pdf by clicking the spinning circle down icon, right from description above.</p></span></br>

    <!-- Footer Section -->
    <footer class="footer py-4">
        <section id="contacts" class="container text-center">
            <h2>Contacts</h2>
            <div class="contact-info">
                <div class="circle-image-container mb-3">
                    <img id="image" class="circle-image rounded-circle" width="150" height="150" src="profile_image_20241127.jpg" alt="Image of Bryan Jay M. Lumabas" />
                    <p><br>
                        <i class="fa-solid fa-circle-user fa-sm" style="color: #ff7733;"></i><span style="margin-left: 30px; align-items: right;">Bryan Jay M. Lumabas</span><br>
                        <i class="fa-solid fa-location-dot fa-sm" style="color: #ff7733;"></i><span style="margin-left: 30px; align-items: right;">Zone 1, Aniog, Sagñay,<br>4421 Camarines Sur</span><br>
                        <i class="fa-solid fa-phone fa-sm" style="color: #ff7733; margin-right: 5px; position: sticky;"></i><span style="margin-left: 25px; margin-right: 55px; align-items: right;">+639117439532</span><br>
                        <i class="fa-solid fa-envelope fa-sm" style="color: #ff7733; margin-right: 30px; position: sticky;"></i><span style="margin-right: -60px; align-items: right;">bryanjaylumabas@gmail.com</span><br>
                    </p>
                    <br>
                </div>
                <span style="margin-left: 40px;"><h4>Let's exchange some ideas behind our creative differences:</h4></span>
            </div>
            <div class="nav-socials mb-3">
                <a href="https://m.facebook.com/" target="_blank" class="me-3"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://my.typo3.org/register" target="_blank" class="me-3"><i class="fa-brands fa-typo3 fa-sm"></i></a>
                <a href="https://web.whatsapp.com/" target="_blank" class="me-3"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.kickstarter.com/login" target="_blank"><i class="fa-brands fa-kickstarter"></i></a>
                <a href="https://auth.scribd.com/u/login?state=hKFo2SBsY0lXbGFjcVpLLVpVV3V6M0U0UzIyVmVjSC1kS3JfRaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGdScjViTWZGVGVvOXpEakxyQmdxUmZsY0JHRklwSXVVo2NpZNkgZ3ljN3lyZnpzdkpmaXd5bHNlYXU4Y3g5dVZhb2FOU1A&ui_locales=en" target="_blank"><i class="fa-brands fa-scribd"></i></a>
            </div>
            <p>&copy; Bryan Jay M. Lumabas. All rights reserved.</p>
        </section>
    </footer>

    <style>
        .footer {
            background-color: #2d3815;
            color: #f28500;
        }

        @media (prefers-color-scheme: dark) {
            .footer {
                background-color: #2d3815;
                color: #f5f5dc;
            }
        }

        .footer a {
            color: #cab266;
        }

        .footer a:hover {
            color: #ff7733;
        }
    </style>

    <!-- Bootstrap JS and Popper.js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>

</body>
</html>
