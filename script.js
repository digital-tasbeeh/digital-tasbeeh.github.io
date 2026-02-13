function shareApp() {
    const shareData = {
        title: 'Digital Tasbeeh Counter',
        text: 'Download this Digital Tasbeeh Counter app and keep sending salawat to Prophet Muhammad ﷺ. Also remember to share it so others benefit too, Insha\'Allah 🤲\n\nDownload links:\niOS: https://apps.apple.com/app/digital-tasbeeh-and-zikr-counter/id6758719384\nAndroid: https://play.google.com/store/apps/details?id=com.pixelwebstudio7.digital_tasbeeh\n\nWebsite: https://digital-tasbeeh.github.io/'
    };

    if (navigator.share) {
        navigator.share(shareData)
            .catch((err) => console.log('Error sharing:', err));
    } else {
        // Fallback for browsers that don't support Web Share API
        const textToCopy = shareData.text;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Share message copied to clipboard!');
        }).catch(() => {
            // If clipboard API also fails, show the text
            alert('Share this message:\n\n' + textToCopy);
        });
    }
}

function toggleDescription() {
    const content = document.getElementById('descriptionContent');
    const button = document.getElementById('expandButton');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        button.textContent = 'more';
    } else {
        content.classList.add('expanded');
        button.textContent = 'less';
    }
}
