from PIL import Image
import os

path = os.path.join(os.path.dirname(__file__), '..', 'src', 'assets', 'images')
path = os.path.abspath(path)

for name in sorted(os.listdir(path)):
    if not name.endswith('.png'):
        continue
    fp = os.path.join(path, name)
    size_before = os.path.getsize(fp)
    img = Image.open(fp)
    if img.mode in ('RGBA', 'P'):
        img = img.convert('RGB')
    w, h = img.size
    max_w = 1200
    if w > max_w:
        ratio = max_w / w
        img = img.resize((max_w, int(h * ratio)), Image.LANCZOS)
    out = fp.replace('.png', '.jpg')
    img.save(out, 'JPEG', quality=82, optimize=True)
    os.remove(fp)
    size_after = os.path.getsize(out)
    print(f'{name}: {size_before // 1024}KB -> {size_after // 1024}KB')
