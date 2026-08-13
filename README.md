# Academic Project Page for the NeuroShield Model

This repository contains the official project page for the [NeuroShield Model](https://github.com/kit-ps/NeuroShield-FM) presented in the paper [NeuroShield: A Device-Agnostic Foundation Model for EEG Authentication](https://arxiv.org/abs/2606.20673).

## About NeuroShield 

NeuroShield is a device-agnostic foundation model for EEG-based authentication designed to overcome the dependency of existing approaches on specific acquisition settings. EEG recordings can vary considerably across headset hardware, channel layouts, and signal durations, which limits knowledge transfer and often requires separate models for different datasets or devices. NeuroShield addresses this challenge by learning identity-discriminative embeddings from variable-channel and variable-length EEG recordings using a dual-stage transformer architecture.

The model was pretrained on three public EEG datasets comprising 15,762 subjects and 28,116 sessions and evaluated on two previously unseen downstream datasets. After fine-tuning, NeuroShield reduces the Equal Error Rate (EER) by 0.44–8.06 percentage points compared with the state of the art. It further demonstrates the ability to process signal durations and channel layouts not encountered during pretraining, supporting its use as a reusable and adaptable EEG identity encoder across heterogeneous recording settings.

## Components

## Technologies

## Repository structure 

## Deploymet


## Acknowledgments
Parts of this project page were based on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) which was adopted from the [Nerfies Project Page](https://nerfies.github.io/). 
Additional code was adapted from the [REVE project website](https://brain-bzh.github.io/reve/). 
We gratefully acknowledge the original authors for making their code publicly available.

## Website License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
