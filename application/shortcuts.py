from __future__ import absolute_import, division
import logging


def prnt(value):
    logging.info('-' * 25)
    logging.info(value)
    logging.info('=' * 25)