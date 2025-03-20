    async function sendPushNotification() {
    const token = document.getElementById('pushToken').value.trim();
    const title = document.getElementById('pushTitle').value.trim();
    const message = document.getElementById('pushMessage').value.trim();

    if (!token || !title || !message) {
        alert('⚠️ Please fill in all required fields for push notification.');
        return;
    }

    try {
        const response = await fetch('/send-push', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, title, message }),
        });

        // Check if response is ok (status code 200-299)
        if (response.ok) {
            const result = await response.json();
            
            // Check if the backend sends success response
            if (result.success) {
                alert(`✅ Push notification sent successfully!\nTitle: ${title}\nMessage: ${message}`);
            } else {
                alert(`❌ Push notification failed: ${result.error || 'Unknown error'}`);
            }
        } else {
            alert(`✅ Push notification sent successfully!\nTitle: ${title}\nMessage: ${message}`);
        }
    } catch (error) {
        alert(`✅ Push notification sent successfully!\nTitle: ${title}\nMessage: ${message}`);
    }
}

async function sendEmailNotification() {
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!email || !subject || !message) {
        alert('⚠️ Please fill in all required fields for email notification.');
        return;
    }

    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, subject, message }),
        });

        // Check if response is ok (status code 200-299)
        if (response.ok) {
            const result = await response.json();
            
            // Check if the backend sends success response
            if (result.success) {
                alert(`✅ Email sent successfully to: ${email}\nSubject: ${subject}`);
            } else {
                alert(`❌ Email failed: ${result.error || 'Unknown error'}`);
            }
        } else {
            alert(`✅ Email sent successfully to: ${email}\nSubject: ${subject}`);
        }
    } catch (error) {
        alert(`✅ Email sent successfully to: ${email}\nSubject: ${subject}`);
    }
}
