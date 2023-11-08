# Kato Steven Mubiru
## Installing on Windows
To get started, you'll need to make sure that C++ is installed.
The full guide for this can be found [here](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-160)

Next, you'll want to have anaconda.
You can download this from [here](https://www.anaconda.com/download#windows)
You can find the Anaconda install guide [here](https://docs.anaconda.com/free/anaconda/install/windows/)

Once you have both of these, open up a the Anaconda prompt. We will create an environment called <span style="background-color: red">base_rasa</span>.It is just a generic name we came up with. Then type:

```anaconda
conda create -n base_rasa python=3.8
conda activate base_rasa
```
Then
```anaconda
conda activate base_rasa
```
Now we are going to be uninstalling pip and installing the latest version as pip 20 versions are stuck in long dependency loops

```python
python -m pip uninstall pip
python -m ensurepip
pyhton -m pip install -U pip
```

Now, we install Rasa
```python
pip install rasa
```

Check if Rasa is installed successfully by doing:
```
rasa -h
```
