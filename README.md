# MFCC Audio Processor

**Professional Mel-frequency cepstral coefficient extraction tool for audio analysis and machine learning applications.**

A command-line utility built with Python & Librosa for extracting meaningful audio features. Perfect for speech recognition, music analysis, and acoustic signal processing.

## Quick Start

### Local Preview
```powershell
cd "C:\projecto uno\site"
python -m http.server 9999
# Open http://localhost:9999 in your browser
```

### Usage
```bash
python "C:\projecto uno\applicaiton MFCC.py" --input audio.wav --sr 22050 --n_mfcc 13
```

## Features

- 🎵 **Multiple Audio Formats**: WAV, MP3, FLAC, OGG support
- ⚡ **Fast Processing**: Optimized NumPy-based feature extraction
- 🔧 **Customizable**: Adjust sample rate, coefficient count, and more
- 💾 **ML-Ready**: Results saved in NumPy .npy format
- 📊 **Compatible**: Works with TensorFlow, PyTorch, scikit-learn

## Technology

- **Librosa**: Audio analysis library
- **NumPy**: Numerical computing
- **SoundFile**: Audio I/O
- **Python 3.9+**: Core language

## Deployment

- **Live**: https://walteropp.github.io/My-first-site-/
- **Repository**: https://github.com/walteropp/My-first-site-
- **Platform**: GitHub Pages

## Use Cases

- Speech recognition preprocessing
- Music genre classification
- Environmental sound analysis
- Acoustic feature extraction for ML models
- Audio quality assessment

## Installation

Requires Python 3.9+. Install dependencies:
```bash
pip install librosa numpy soundfile
```

## License

MIT License - Feel free to use and modify!
