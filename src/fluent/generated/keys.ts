import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    actions_separator: {
                        table: 'sys_app_module'
                        id: '308d7968ea414542ae959711b8d765bc'
                    }
                    active_students_module: {
                        table: 'sys_app_module'
                        id: 'f1d5c3e0b0974ceda0e99e276200fa80'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'dd60b7e080534bc4b458ed1163461772'
                    }
                    course_001: {
                        table: 'x_1917234_educatio_course'
                        id: 'e83efaaa756840c59accc8ffb254b383'
                    }
                    course_002: {
                        table: 'x_1917234_educatio_course'
                        id: '7d712655fa7c4cf395875ab65f3b276b'
                    }
                    course_003: {
                        table: 'x_1917234_educatio_course'
                        id: 'd355d3d3772c4c898b41305f003d59c0'
                    }
                    course_module: {
                        table: 'sys_app_module'
                        id: '087cbf9c1f7a4ebfb7968f3aac83bf84'
                    }
                    current_enrollments_module: {
                        table: 'sys_app_module'
                        id: '9948ab11d8904249b9534ef038dd9c0d'
                    }
                    dashboard_module: {
                        table: 'sys_app_module'
                        id: 'a279365fbb884943927bd2ddce22ec4d'
                    }
                    educational_dashboard: {
                        table: 'sys_ui_page'
                        id: 'cddb72b22e9a45bc818e4b54a8297df9'
                    }
                    educational_menu: {
                        table: 'sys_app_application'
                        id: 'ccbcf336d2e94a49b47072b843ea25bc'
                    }
                    enrollment_001: {
                        table: 'x_1917234_educatio_enrollment'
                        id: 'dd364877acda4e69bfd2ea2dff71c7ae'
                    }
                    enrollment_002: {
                        table: 'x_1917234_educatio_enrollment'
                        id: 'a565f297fb1e45898095763a0b9b0f5c'
                    }
                    enrollment_003: {
                        table: 'x_1917234_educatio_enrollment'
                        id: '2e5c155e51f54713be3c815597727639'
                    }
                    enrollment_module: {
                        table: 'sys_app_module'
                        id: '76b048a52b81481799805b93b95bb140'
                    }
                    enrollment_validation: {
                        table: 'sys_script'
                        id: 'c028b808bc9d436fb7a84285073e9318'
                    }
                    new_enrollment_module: {
                        table: 'sys_app_module'
                        id: '5f75cf2c255b4801b7c552b166039c8e'
                    }
                    new_student_module: {
                        table: 'sys_app_module'
                        id: '0f05d6701d214d94bc58c53428d5d29f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'fd5823a7a0b84edb99667e3278a338c6'
                    }
                    reports_separator: {
                        table: 'sys_app_module'
                        id: '5cec49125fd1412193569c5131c367eb'
                    }
                    'src_server_enrollment-validation_js': {
                        table: 'sys_module'
                        id: '0d868990800843a49c07e8019a068fb4'
                    }
                    student_001: {
                        table: 'x_1917234_educatio_student'
                        id: 'd4c1424147774bd085fffe0c1ba73537'
                    }
                    student_002: {
                        table: 'x_1917234_educatio_student'
                        id: '71a93252aee6490189d3c02ba82bd8b0'
                    }
                    student_003: {
                        table: 'x_1917234_educatio_student'
                        id: '775af84df3954f04bb1582d8874ab3ad'
                    }
                    student_module: {
                        table: 'sys_app_module'
                        id: 'fd200d4a693448a3832a421ebefefdad'
                    }
                    teacher_001: {
                        table: 'x_1917234_educatio_teacher'
                        id: '9f70a441a98c4f9f86a31e630d8c5a6c'
                    }
                    teacher_002: {
                        table: 'x_1917234_educatio_teacher'
                        id: 'b4b9c269223b4a2a8f9e29bc86ecf7ed'
                    }
                    teacher_003: {
                        table: 'x_1917234_educatio_teacher'
                        id: 'd3457f80f9e445b391432552848d89e1'
                    }
                    teacher_module: {
                        table: 'sys_app_module'
                        id: '984c21e4509a4bfa914cfd2c7a32a95e'
                    }
                    'x_1917234_educatio/main': {
                        table: 'sys_ux_lib_asset'
                        id: 'c0ea0c1e63a24c328ba6eb21922808bb'
                    }
                    'x_1917234_educatio/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: 'b04db9f343bf49afab99057c762136df'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '0037c73a314946de8529c5146c96e8c8'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'status'
                            value: 'suspended'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '03c48eb75e38403baf8382ff5a69c886'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'status'
                            value: 'terminated'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '04a5fb8ede924f348390cdd736bb02a0'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'subjects'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0563bedf230a4848a299405cfc1c2b18'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '05e110ddfa9949e295ca7c58cc78cc16'
                        key: {
                            name: 'x_1917234_educatio.registrar'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0999dab7e0ab44a596c40b0c652298d0'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'grade_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ba46f41ca6a49d18181a6d6dcd5a8f5'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'date_of_birth'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f2f49a7b8e247e6a3e3ef1cf9e1e217'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'last_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0febae5413a042449bb3e5ea681a7bbf'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1108df52df9749a6aa199ec77fad4f4e'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'c_minus'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '11bd17966fcd4e1e9a63511e09a5ad71'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12be5d79955b495b9fb2c525f64ede25'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '164525a352e64e5c9d3a2f863cb743dc'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '165d7024db6a4c3380d0fd526ca12355'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'semester'
                            value: 'fall'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '196c8575e36e46a3802ad4bb92e21bb9'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'semester'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '197d9403d1564fcebd7952cab87bd647'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'medical_info'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '1a8eee1138004fc9aea64773c34d98f4'
                        key: {
                            name: 'x_1917234_educatio.teacher'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1aafb96042504c72882b762e79116f8e'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'date_of_birth'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b9f6ed6af5b4e1b9e713fb3d1374917'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'student_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1ebb19d717b9407a96a94e102653d6b7'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'withdrawal'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1fc5b7c2e7994fa3bf15c953f6497080'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'admission_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '205a487f50044fef886200749a1ab52d'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '267b1b85e75f4ec4b3c18368e876c30d'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '278b6438e3d84fb5a73626cee74a552a'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'a'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '28cd43f8a2024524b3f820f345e41261'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                            value: 'music'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2a8b89c3be164914a05c4d58ed6bdad2'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'date_of_birth'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2d36eef93e784b8db6b8dadd608c3a69'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'b_minus'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2da979b6992146359470b83e118fc349'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                            value: 'english'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2e08e62effdb4808a243ab522351eb6a'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'salary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2e2138a2d57940f383df44fb912c422a'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '3170166ff12e4c1abe206ac5e2358663'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '340130d210f24b11876fc02408a2234d'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'c'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '345b694c55f04c069c63d7964d04a17e'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'max_students'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '37552c9bebaa4aaf9f919a01b20bcba3'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                            value: 'physical_education'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '37a98ef4e2d0472c87a915c7262f4057'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'semester'
                            value: 'spring'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '39391a4257474efe9944b5c0eb3c2460'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'credits'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a0c6ea367554255ba155d6aa8a2bb61'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'course_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a3d5686096d45f58154dfab749c419d'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a8bf50e8f664d568eb6a7402d39825b'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                            value: 'computer_science'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b7e2c79519e4504a582e70608d922b0'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '42d095cb688c4dc391d674f23297d993'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'qualification'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48ebfd76ffda4148ab4b33d1c2c08a32'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'course_code'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4b6ab7b066574769bf83767d989ca371'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'status'
                            value: 'inactive'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4bbae16b05e9401886d80a4a0294cba1'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'grade_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4cacc426d95147fcab46cf63163befdc'
                        key: {
                            name: 'x_1917234_educatio_student'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f01e2f6eafd4a40ad2893f29508af2f'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4f8f17e60ef844e89eabd8761b75f141'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '531a4256420449e1b0908d3be942a0f7'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '55fc4ee1ea9e4fc3b9dae24a04a6f29a'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '58f54f9cf3c040e7b548b27ac84dc5bf'
                        key: {
                            name: 'x_1917234_educatio.admin'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '595b51e17eaa48488fdc3a5399f4cc60'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'experience_years'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59b12bfcc1ce4357b1b6255f7e8fac40'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'enrollment_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5a4883757de54490bb2d87725754364e'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'teacher_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5abf7c73d21f4ef38de1bb7f32b8fb08'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'last_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c4097015685458d8c94079cf56eef4f'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61c447c0c19e41eba3f3a042b6132471'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'max_students'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '63787b9cae50417cb27dc407c8483589'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                            value: 'history'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '66c52ed2b84941f4835a5a78d421cfd0'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'salary'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '675bfef68e444a1b9166fa98d14361b4'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '67e648c762c84c2abfd4e70bcf24ff46'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'guardian_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '689854dcdbf44067ba0f65c7610f370b'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                            value: 'mathematics'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68cc7c1fcb5d4583aec02f56d3356914'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'subjects'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68e7e77e17b34ceb97a4e6199e997939'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'semester'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6934ee7ec1af4bac9eeb2460e0e7e9c6'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                            value: 'computer_science'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6acb3a5532d444c6876e1d76949e0b48'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'grade_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d27060ce4c840058f9c05f7a18052e1'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'phone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '71103d5cf7be4a2b82a41c2650c7ce82'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '72cab64df3474d5bab08c8c5b92c1c65'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'guardian_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '76c0fcfca3a54c6c991b887968435eb1'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'address'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '77223d346cbf4193a4e2ca523597666f'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'a_minus'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '7b2052725fc54d4e8e5e6b8ef880395e'
                        key: {
                            name: 'x_1917234_educatio.student'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d19bd46d36542fb8fb8764d349aeac7'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                            value: 'art'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7d9858e421804c9ab188be7b13f2f8bb'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'c_plus'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7e08f98faf1b4d5f825971d22c47d9d6'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'b_plus'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f87e15febc14e5c8096b856813c2093'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'medical_info'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7ffc0d81b3464e26914ec7ebf1b6338f'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'semester'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '800311154a044080b646e331d668b00d'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                            value: 'music'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8073ad4de02f4ebbb90b6b2e7d8e4f99'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'status'
                            value: 'enrolled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '80f04178f1a546c89a0d36b72992bd5a'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'gpa_points'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81660a3a1d024cc5ac820ef0d6f01619'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82f3852383174e058fa64a8765a2acd3'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                            value: 'history'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '833bc908ea244c469f1ff9fdaaa5547f'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                            value: 'foreign_language'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '84f169753d8a4d7ca84fbf432836f537'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'qualification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '857fc18b755b46e0996a0fd809422f97'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'course'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8933ffb9c20b4f0f9ea0c7d626e793e6'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'd'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89cebe9a7b764885a71acb9de4e96fc7'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'experience_years'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8a5c12288f7b4b1b975240b5185fa21c'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8b3cd00187014e15918dbdc9dab215bf'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8de29c04a1334432a448657dcc0a3986'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e15306d0ab3434994f3bc4481b19810'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '94ffc3c6504948048e042aaa74fe10d7'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'b'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '99203b038fdb4d98a2d8f95fba34999a'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'status'
                            value: 'inactive'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9932b8d5c93344a6a59bc855a0c5102d'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'emergency_contact'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9a1a1603247241bbb99caeec6cc96a89'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9b2d3923e9564e5da8d6724eed51e568'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'course_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9db9e7584ca84216bcda9ad27d5c71e5'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'f'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9dfc6bd411ee4ab59f4bc6dee6157625'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9ec4ad828c1e47a08c5eb969b8832ed5'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'hire_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a0b84206e0114a97bbc7dcd4d08efbda'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'first_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3b9d28425814f7d8a4fa6f0657f2bb8'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'admission_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a86d3a548fe2440193630fb925de27d4'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'hire_date'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a87ed597a03545b7bfa8f0ae678e0784'
                        key: {
                            name: 'x_1917234_educatio_course'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8b93891e11f430ead2c0a82249c16f3'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a8d4619adced4159a43e11cc607e1d42'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab1af893f7ad44b2b4c41b013e66eb17'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'address'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b33ebc1883604416ba71d498a53fe9cd'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'credits'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b3cb845f6df84d1f98ad231cef2231b9'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'guardian_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b3fb88538b8d4b238b656e1b3d96b12a'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b449c1f25cc94e52875180a6e899d81d'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b8998b444ba84c7295b6613c85a22e2a'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b9015b059fc04427a1a237ec5afcebcf'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bdf62a5b36e745c2a0d85124d6827278'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'emergency_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bfde4eb34daa4775aeb63fd86e3a1f69'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'teacher'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3974bf7d1cc4eb393a6a852060beacd'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c3f5db994d0842698c881103f91f1efc'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'course'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c3f9eed2e70d476e9ff3a3d453106713'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'status'
                            value: 'failed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c571355e36834def9d72bc680fd52335'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'teacher'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c5855dc138994034a3fd7694303244c8'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c70357911bcf4db981d67b6c68052084'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'last_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c93a7fcf90bc42c59466430b972c272b'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'semester'
                            value: 'summer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb5dae4ac5fb453fb35ad7784cf25ccd'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                            value: 'english'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cb6102511c4a4a46a77a4f46ab44c1a9'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'academic_year'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cd321664241a41688d627d19abe93567'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                            value: 'art'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cdf973f8d0c74f4e96b3a877f6bdaf64'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cf80f0fc5f6c4a14b5afba36acf6aaeb'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'emergency_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd04486f2776d44bb8425ceaac9ad9252'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'a_plus'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0a157488f804208bd7a7c2e1ae0bf35'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'guardian_contact'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd4be22dda16345b49efc4d7c42199cc2'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'student'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd4d10fc33cd7481a827ba396ac93b28f'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'student'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd5240f7464c046bbabcaf57de9b232cf'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd6abf54bd047424198fdfffb0f776630'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'status'
                            value: 'archived'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd7e7c1ab574348f5b56c9c92e2057cf6'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9180ddab67a49789281887b9b07f0d1'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'last_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da2db46879e3461cb20a4ad4911c951e'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db14c545dfa0497ab7be36e62f5c02fb'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                            value: 'science'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dccf9de0205d4cb582202c6b99f2c484'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'status'
                            value: 'graduated'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dd3cff02731a44acb20e447635ac7dd2'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                            value: 'foreign_language'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ddba14f4d2474b8d9772aea891df4a1d'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                            value: 'science'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ddf181c190994e69909919629f2ec81c'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'academic_year'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df22e9c2498641f7b172c1a9672be4bf'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'teacher_id'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df37dafc09904fc58969f2993daf4a62'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'grade_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df5a491dd7364eadad6c9bc358d3957d'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'enrollment_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e094c6405d7a4f5a9c6eacd134aa0e4d'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2a92f8773ee4623b8642d988a127cef'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'gpa_points'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e308c2e22e464237be7ace5a02897e91'
                        key: {
                            name: 'x_1917234_educatio_student'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e341948e492d4523b2a3b2205d3a9c16'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'date_of_birth'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e3fbab85729d41778dec6e04816fc40b'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e423c9ed462749a5ac6312e218246bae'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'course_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e42ab472e64043739ef0e5eee2b27da8'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e4b107aa05094ffeac2b6033b5ca2ff8'
                        key: {
                            name: 'x_1917234_educatio_course'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e55a5476071f40e080f840e0fd465145'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'student_id'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e6e60217b435450b957a13735288f284'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e705cb36a0de4c6c8ba4a864e41fb84e'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e7363d64945b45c6bb52ce510ed8e39c'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'status'
                            value: 'inactive'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e747dec7832f4aa4bffa2f4555a72655'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'final_grade'
                            value: 'incomplete'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e8bab1fdabc4437dac24ba5b01fe0b03'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e8d86126364640c2a643e71dd9214325'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ebcebd9504e34c9985462d489cae45a3'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ed31dd0ece3843308372f69c07681ee9'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'subject_area'
                            value: 'mathematics'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ede5777ad4ff42deada3f003fb81e1b5'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee802c89fe93473b8dce2f61f1668e02'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'department'
                            value: 'physical_education'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0eaf13bf7bd47acbdf184bac23f5456'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1742d962fd14f8eb3daf6cce4c756e9'
                        key: {
                            name: 'x_1917234_educatio_student'
                            element: 'emergency_contact'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f1ba5556548a4f0b9a20efd02a0c6b27'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'status'
                            value: 'dropped'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f4028cf0dc9f4c4bab8c6d398838c5ca'
                        key: {
                            name: 'x_1917234_educatio_course'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f46eecf499634815bd9cf3f4900737b8'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'status'
                            value: 'retired'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f48ec0fc2d6a405ab81896e15c77f1ff'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f66f78beb9e94a9f960ef373b57d2983'
                        key: {
                            name: 'x_1917234_educatio_enrollment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f7ff43198b7f43c19169c9383a925441'
                        key: {
                            name: 'x_1917234_educatio_teacher'
                            element: 'status'
                        }
                    },
                ]
            }
        }
    }
}
