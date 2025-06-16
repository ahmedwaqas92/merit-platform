import os
import re
import csv
import sys
import uuid
import json
import time
import pyodbc
import bcrypt
import base64
import hashlib
import sqlite3
import logging
import requests
import psycopg2
import traceback
import numpy as np
import pandas as pd
import psycopg2.extras
from uuid import UUID
from decimal import Decimal
from itertools import groupby
from bs4 import BeautifulSoup
from selenium import webdriver
from operator import itemgetter
from functools import lru_cache
from flask_session import Session
from collections import defaultdict
from datetime import datetime, timedelta
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from flask import Flask, render_template, url_for, Blueprint, redirect, request, session, jsonify