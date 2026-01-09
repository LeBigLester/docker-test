FROM python:3.11-slim

WORKDIR /app

# Dépendances système minimales + Chromium + Xvfb + Playwright deps
RUN apt-get update && apt-get install -y --no-install-recommends \
    wget curl gnupg unzip xvfb xauth \
    libglib2.0-0 \
    libnspr4 \
    libnss3 \
    libdbus-1-3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxkbcommon0 \
    libatspi2.0-0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libcairo2 \
    libpango-1.0-0 \
    libasound2 \
    libgdk-pixbuf-xlib-2.0-0 \
    fonts-unifont \
    && rm -rf /var/lib/apt/lists/*

# Dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Playwright + Chromium (sans install-deps car on a déjà installé les dépendances)
RUN pip install --no-cache-dir playwright && \
    playwright install chromium

# Code de l'app
COPY app/ ./app/

# Commande principale : lance ton API
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
