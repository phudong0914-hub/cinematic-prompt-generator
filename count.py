import json

with open('public/data/prompts.json', encoding='utf-8') as f:
    prompts = json.load(f)

print(f"TOTAL PROMPTS IN DATABASE: {len(prompts)}")

cats = {}
for p in prompts:
    c = p.get('category', 'unknown')
    cats[c] = cats.get(c, 0) + 1

for c, count in cats.items():
    print(f"Category '{c}': {count} prompts")
