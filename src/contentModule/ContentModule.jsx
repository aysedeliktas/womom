import React from 'react';
import './ContentModuleStyle.css';
import DocumentsModule from '../components/documentsModule/DocumentsModule';
import VideoModule from '../components/documentsModule/videoModule/VideoModule';
import SurveyModule from '../components/documentsModule/surveyModule/SurveyModule';

function ContentModule({ module, index, moduleId }) { 
    return (
        <div className="content-module-container">
            <div className='module-label'>{module.label}</div>
            {module.type === 1 && <VideoModule data={module} />}
            {module.type === 2 && <DocumentsModule data={module} moduleId={moduleId} />}
            {module.type === 3 && <SurveyModule data={module} />}
        </div>
    );
}

export default ContentModule;
