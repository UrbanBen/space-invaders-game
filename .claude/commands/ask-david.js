// Ask David Email Generator Slash Command
// Usage: /ask-david

module.exports = {
  name: 'ask-david',
  description: 'Generate an email draft for David based on current codebase context and outstanding questions',
  
  async execute(context) {
    const { codebase, conversation, currentWorkflow } = context;
    
    // Analyze current project state
    const projectAnalysis = await this.analyzeProject(codebase);
    const openQuestions = await this.identifyOpenQuestions(conversation);
    const workflowStatus = await this.assessWorkflow(currentWorkflow);
    
    // Generate email draft
    const emailDraft = this.generateEmailDraft({
      projectAnalysis,
      openQuestions,
      workflowStatus
    });
    
    return {
      type: 'email-draft',
      content: emailDraft
    };
  },
  
  async analyzeProject(codebase) {
    return {
      currentFeatures: this.extractFeatures(codebase),
      recentChanges: this.getRecentChanges(codebase),
      techStack: this.identifyTechStack(codebase),
      completionStatus: this.assessCompletion(codebase)
    };
  },
  
  async identifyOpenQuestions(conversation) {
    // Extract questions, TODOs, and uncertain areas from conversation
    return [
      // This would be populated based on conversation analysis
    ];
  },
  
  async assessWorkflow(workflow) {
    return {
      currentPhase: workflow.phase || 'development',
      blockers: workflow.blockers || [],
      nextSteps: workflow.nextSteps || []
    };
  },
  
  generateEmailDraft({ projectAnalysis, openQuestions, workflowStatus }) {
    const subject = `Project Update: ${projectAnalysis.projectName || 'Space Invaders Game'} - Input Needed`;
    
    const body = `Hi David,

I wanted to update you on the current progress and get your input on a few items.

## Current Status
${this.formatProjectStatus(projectAnalysis)}

## Recent Accomplishments
${this.formatRecentChanges(projectAnalysis.recentChanges)}

## Questions for You
${this.formatOpenQuestions(openQuestions)}

## Next Steps
${this.formatNextSteps(workflowStatus.nextSteps)}

Let me know your thoughts when you have a chance.

Best regards,
Ben`;

    return { subject, body };
  },
  
  formatProjectStatus(analysis) {
    return `- Current phase: Development and deployment
- Tech stack: ${analysis.techStack.join(', ')}
- Completion: ${analysis.completionStatus}%`;
  },
  
  formatRecentChanges(changes) {
    return changes.map(change => `- ${change}`).join('\n');
  },
  
  formatOpenQuestions(questions) {
    if (questions.length === 0) {
      return '- No specific questions at this time - project proceeding smoothly';
    }
    return questions.map((q, i) => `${i + 1}. ${q}`).join('\n');
  },
  
  formatNextSteps(steps) {
    return steps.map(step => `- ${step}`).join('\n');
  }
};