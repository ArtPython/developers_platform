def validate_projects(attrs):
    projects_list = []
    try:
        if len(attrs['projects']) > 0:
            for project in attrs['projects']:
                if project.mark < attrs['skill']:
                    projects_list.append(project)
    except AssertionError:
        projects_list = []
    attrs['projects'] = projects_list
    return attrs['projects']
