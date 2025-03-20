function sendNotification(message, type) {
            let panel = document.getElementById("notificationPanel");
            let notification = document.createElement("div");
            notification.classList.add("notification", type);
            notification.innerText = message;
            panel.appendChild(notification);
        }

        function sendEmailNotification() {
            let email = document.getElementById("email").value;
            if (email) {
                alert(`Email notification sent to: ${email}`);
            } else {
                alert("Please enter a valid email address.");
            }
        }
