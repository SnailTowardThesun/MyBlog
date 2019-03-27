import os
import logging

from django.conf import settings

logger = logging.getLogger('django')


class articleManager:
    def __init__(self):
        self._storage_path = os.path.join(settings.BASE_DIR, 'storage')

    def addArticle(self, f):
        logger.info('ready to add article %s' %(self._storage_path))


    def deleteArticle(self, f):
        logger.info('ready to delete article')
        

    def updateArticle(self, f):
        logger.info('ready to update article')