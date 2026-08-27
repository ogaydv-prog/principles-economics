import os
import datetime
import xml.etree.ElementTree as ET
import urllib.request
import re

# Список надежных бесплатных RSS-каналов новостей экономики и бизнеса
RSS_FEEDS = [
    "https://www.theguardian.com/business/economics/rss",
    "https://feeds.bbci.co.uk/news/business/rss.xml",
    "https://rss.dw.com/xml/rss-en-bus"
]

def fetch_rss_items():
    items = []
    headers = {'User-Agent': 'Mozilla/5.0'}
    for feed_url in RSS_FEEDS:
        try:
            req = urllib.request.Request(feed_url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as response:
                xml_data = response.read()
                root = ET.fromstring(xml_data)
                channel = root.find('channel')
                if channel is not None:
                    for item in channel.findall('item'):
                        title = item.findtext('title')
                        link = item.findtext('link')
                        desc = item.findtext('description')
                        if title and link:
                            # Очистка описания от HTML-тегов
                            clean_desc = re.sub('<[^<]+?>', '', desc) if desc else ""
                            items.append({
                                'title': title.strip(),
                                'link': link.strip(),
                                'description': clean_desc.strip()[:200] + '...'
                            })
        except Exception as e:
            print(f"Error fetching {feed_url}: {e}")
    return items

def generate_html(news_items):
    # Дата выпуска
    today_str = datetime.datetime.now().strftime("%B %d, %Y Edition")
    
    # Шаблон нашего сайта The Economics
    html_template = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Economics | Global Economic News & Analysis</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {{ font-family: 'Inter', sans-serif; background-color: #fcfbf9; color: #111111; }}
        .serif {{ font-family: 'Merriweather', Georgia, serif; }}
        .brand-red {{ background-color: #e5001c; }}
        .text-brand-red {{ color: #e5001c; }}
        .border-brand-red {{ border-color: #e5001c; }}
        .tab-btn.active {{ border-bottom: 3px solid #e5001c; color: #e5001c; font-weight: 700; }}
    </style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-red-600 selection:text-white border-t-4 border-brand-red">

    <header class="bg-white border-b border-stone-300 sticky top-0 z-40 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div class="flex items-center space-x-4">
                <a href="index.html" class="brand-red text-white font-extrabold px-3 py-1.5 text-lg sm:text-xl tracking-tighter serif shadow-sm inline-block">
                    The Economics
                </a>
                <div class="hidden md:block border-l border-stone-300 pl-4">
                    <span class="text-xs font-bold tracking-widest text-stone-500 uppercase block">Academic Intelligence Hub</span>
                    <span class="text-xs text-stone-700">AlmaU • School of Economics and Digital Technologies</span>
                </div>
            </div>
            <div class="flex items-center space-x-3">
                <a href="index.html" class="px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-all border border-stone-300 flex items-center space-x-1.5 rounded-sm">
                    <i class="fa-solid fa-arrow-left text-brand-red"></i>
                    <span>Main Hub</span>
                </a>
                <a href="syllabus.html" class="px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-all border border-stone-300 flex items-center space-x-1.5 rounded-sm">
                    <i class="fa-solid fa-book text-stone-600"></i>
                    <span>Syllabus</span>
                </a>
                <div class="border-l border-stone-300 pl-3 ml-1">
                    <img src="https://ogaydv-prog.github.io/principles-economics/almau.jpg" alt="AlmaU Logo" class="h-9 w-auto object-contain bg-white p-0.5 border border-stone-200 rounded-sm">
                </div>
            </div>
        </div>
    </header>

    <div class="bg-stone-100 border-b border-stone-200 py-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-stone-600">
            <span class="font-semibold uppercase tracking-wider"><i class="fa-solid fa-rotate text-brand-red mr-1"></i> Automated Weekly Briefing</span>
            <span class="serif italic">{today_str}</span>
        </div>
    </div>

    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="border-b-2 border-stone-900 pb-6 mb-8">
            <span class="text-xs font-extrabold text-brand-red uppercase tracking-widest block mb-1">Global Economic Analysis</span>
            <h1 class="text-3xl sm:text-4xl font-black text-stone-900 serif leading-tight">
                The World This Week: Trade, Policy & Macro Economic Trends
            </h1>
            <p class="text-sm sm:text-base text-stone-600 mt-2 max-w-4xl leading-relaxed serif">
                Automatically curated economic headlines and international business updates for academic discussion at Almaty Management University.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
"""

    # Добавляем 6 актуальных новостей из RSS
    for item in news_items[:6]:
        html_template += f"""
            <div class="space-y-3 border-t-2 border-stone-900 pt-4 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold text-brand-red uppercase tracking-widest">Global Market News</span>
                    <h3 class="text-lg font-bold text-stone-900 serif leading-snug mt-1">
                        {item['title']}
                    </h3>
                    <p class="text-xs text-stone-600 leading-relaxed mt-2">
                        {item['description']}
                    </p>
                </div>
                <div class="pt-4 font-sans">
                    <a href="{item['link']}" target="_blank" rel="noopener noreferrer" class="text-xs text-brand-red font-bold hover:underline flex items-center space-x-1">
                        <span>Read Full Original Article →</span>
                    </a>
                </div>
            </div>
"""

    html_template += """
        </div>
    </main>

    <footer class="bg-stone-900 text-stone-400 py-8 border-t-4 border-brand-red mt-12 text-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center space-x-3">
                <span class="brand-red text-white font-black px-2 py-1 text-sm serif">The Economics</span>
                <span>International Business News Hub • Almaty Management University</span>
            </div>
            <p class="text-stone-500 text-center md:text-right">
                Automatically updated via GitHub Actions. All source rights reserved to respective publishers.
            </p>
        </div>
    </footer>
</body>
</html>
"""
    return html_template

if __name__ == "__main__":
    items = fetch_rss_items()
    if items:
        html_content = generate_html(items)
        with open("ibn.html", "w", encoding="utf-8") as f:
            f.write(html_content)
        print("Successfully updated ibn.html with fresh news!")
    else:
        print("No news fetched. Keeping existing file.")
