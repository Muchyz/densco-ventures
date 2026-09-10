import re

path = 'src/index.css'
with open(path) as f:
    text = f.read()

def parse_chunks(text):
    chunks = []
    i, n = 0, len(text)
    while i < n:
        start = i
        while i < n and text[i] in ' \t\r\n':
            i += 1
        if i >= n:
            chunks.append(text[start:n])
            break
        if text[i:i+2] == '/*':
            end = text.index('*/', i) + 2
            chunks.append(text[start:end])
            i = end
        else:
            brace = text.index('{', i)
            depth, j = 0, brace
            while j < n:
                if text[j] == '{':
                    depth += 1
                elif text[j] == '}':
                    depth -= 1
                    if depth == 0:
                        j += 1
                        break
                j += 1
            chunks.append(text[start:j])
            i = j
    return chunks

chunks = parse_chunks(text)
remove = [False] * len(chunks)

for idx, c in enumerate(chunks):
    if 'certif' in c.lower():
        remove[idx] = True
        if c.strip().startswith('/*'):
            # also drop the very next chunk (e.g. .cert-grid, which has no "certif" in its own text)
            if idx + 1 < len(chunks):
                remove[idx + 1] = True

kept = [c for c, r in zip(chunks, remove) if not r]
new_text = ''.join(kept)
new_text = re.sub(r'\n{3,}', '\n\n', new_text)

with open(path, 'w') as f:
    f.write(new_text)

print(f"Removed {sum(remove)} of {len(chunks)} chunks")
