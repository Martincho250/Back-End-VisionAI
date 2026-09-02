import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url

# Configuration       
cloudinary.config( 
    cloud_name = "c2fq4zzj", 
    api_key = "353355462472236", 
    api_secret = "XEE7ohNbbMYMiMuZjf-oEEv5Hmg", # Click 'View API Keys' above to copy your API secret
    secure=True
)

# Upload an image
upload_result = cloudinary.uploader.upload("https://res.cloudinary.com/c2fq4zzj/image/upload/v1788348294/Lionel_Messi__Player_of_FC_Barcelona_team.jpg",
                                           public_id="messi")
print(upload_result["secure_url"])

# Optimize delivery by resizing and applying auto-format and auto-quality
optimize_url, _ = cloudinary_url("messi", fetch_format="auto", quality="auto")
print(optimize_url)

# Transform the image: auto-crop to square aspect_ratio
auto_crop_url, _ = cloudinary_url("messi", width=500, height=500, crop="auto", gravity="auto")
print(auto_crop_url)
