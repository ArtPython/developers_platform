def validate_frameworks(attrs):
    """validate ties between languages and frameworks"""
    list_of_frameworks = []
    dev_stack = [i.name for i in attrs['stack']]
    for i in attrs['frameworks']:
        if i.language.name in dev_stack:
            list_of_frameworks.append(i.id)
        # if i.language.name not in dev_stack:
        #     raise serializers.ValidationError(
        #     "you can not choose this(ese) framework(s)")
    attrs['frameworks'] = list_of_frameworks
    return attrs['frameworks']


def validate_projects(attrs):
    """validate projects data"""
    list_of_projects = []
    try:
        if len(attrs["projects"]) > 0:
            for project in attrs['projects']:
                projects_langs = [lan.name for lan in project.stack.all()]
                # projects_frameworks = [fr.name for fr in project.frameworks.all()]
                # ----
                devs_langs = [lan.name for lan in attrs['stack']]
                # devs_frameworks = [fr.name for fr in attrs['frameworks']]
                """compare project's marks and dev's skill"""
                if project.mark <= attrs['skill']:

                    """compare project's languages and dev's languages"""
                    if set(projects_langs).intersection(set(devs_langs)):
                        list_of_projects.append(project)

                        # """compare project's languages and dev's
                        # frameworks"""  # --- optional ---
                        # if set(projects_frameworks).intersection(set(devs_frameworks)):
                        #     list_of_projects.append(project)
    except KeyError:
        attrs['projects'] = []
    attrs['projects'] = list_of_projects
    return attrs['projects']
